---
index: 1
title: create-react-app 源码浅析
description: create-react-app 源码浅析
icon: react
date: 2020-06-20
category:
  - 学习笔记
tag:
  - React
---

> 本文基于 create-react-app v3.4.1版本

## 概述 - `package.json`

- 先看 `package.json`，下面👇是完整内容

```json
{
  "name": "create-react-app",
  "version": "3.4.1",
  "keywords": [
    "react"
  ],
  "description": "Create React apps with no build configuration.",
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/create-react-app.git",
    "directory": "packages/create-react-app"
  },
  "license": "MIT",
  "engines": {
    "node": ">=10"
  },
  "bugs": {
    "url": "https://github.com/facebook/create-react-app/issues"
  },
  "files": [
    "index.js",
    "createReactApp.js",
    "yarn.lock.cached"
  ],
  "bin": {
    "create-react-app": "./index.js"
  },
  "dependencies": {
    "chalk": "4.1.0",
    "commander": "4.1.0",
    "cross-spawn": "7.0.3",
    "envinfo": "7.5.1",
    "fs-extra": "9.0.1",
    "hyperquest": "2.1.3",
    "inquirer": "7.2.0",
    "semver": "7.3.2",
    "tar-pack": "3.4.1",
    "tmp": "0.2.1",
    "validate-npm-package-name": "3.0.0"
  }
}
```

- 除去基本描述，我们比较关注的主要有以下两个：

```json
{
  ...
  "engines": {
    "node": ">=10"
  },
  ...
  "bin": {
    "create-react-app": "./index.js"
  }
}
```

其中：

engines 指明了运行所需的 node 版本至少为10以上

bin 指明了入口文件为 ./index.js



## 入口 - `index.js`

```javascript
#!/usr/bin/env node
// 指明这个脚本的解释程序为 node，并告知系统在 PATH 中查找 node
```



详见：[#!/usr/bin/env node 到底是什么？](https://juejin.im/post/5cb93cd651882578b148c637)



```javascript
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * 版权所有，脸书公司，2015至今
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 源代码遵循 MIT 开源许可，相关文件可以在根目录中找到
 */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
//   /!\      不要修改这个文件      /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// create-react-app is installed globally on people's computers. This means
// that it is extremely difficult to have them upgrade the version and
// because there's only one global version installed, it is very prone to
// breaking changes.
// create-react-app 在人们的电脑上都是全局安装的，这意味着版本升级会变得非常困难。
// 也正因如此，哪怕仅仅是一点小小的修改也可能对其造成破坏性的改变。
//
// The only job of create-react-app is to init the repository and then
// forward all the commands to the local version of create-react-app.
// create-react-app 的唯一任务就是初始化一个仓库，
// 然后按步执行本地版本的 create-react-app 中的每一条命令。
//
// If you need to add a new command, please add it to the scripts/ folder.
// 如果你需要添加一条命令，请把它加在 scripts/ 文件夹中。
//
// The only reason to modify this file is to add more warnings and
// troubleshooting information for the `create-react-app` command.
// 只有当你想要在 `create-react-app` 命令行中添加一些警告或者错误提示信息的情况下，
// 才应该考虑修改本文件。
//
// Do not make breaking changes! We absolutely don't want to have to
// tell people to update their global version of create-react-app.
// 不要擅自改动！我们完全不希望不得不让人们来升级 create-react-app 的版本
//
// Also be careful with new language features.
// This file must work on Node 0.10+.
// 还需注意的是新的语言特性
// 这个文件必须运行在 node 10+ 版本
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
//   /!\      不要修改这个文件      /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

主要是一些提示信息，总结起来基本都是在说：不要修改这个文件！！！



```javascript
'use strict';
// 使用严格模式
```

详见：[严格模式 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)



```javascript
var currentNodeVersion = process.versions.node;
// 获取 node 的版本
```

其中 process.versions 返回的是一个对象，包含了 node 及相关依赖的版本信息（字符串形式）

详见[nodejs - process.versions](https://nodejs.org/api/process.html#process_process_versions)

例如我在 node 环境下输入 console.log(process.versions)，打印值如下：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1594603312213-49482f38-ea57-4e9f-9936-cd5db00a8938.png)

所以 process.versions.node 可以获取到 nodejs 的版本号（字符串形式）



```javascript
var semver = currentNodeVersion.split('.');
var major = semver[0];
// 获取版本号第一个数字，例如，我的node版本是 v10.19.0，major的值即为10
```

major 的值用于后续判断 create-react-app 是否可以执行



```javascript
if (major < 10) {
  console.error(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'Create React App requires Node 10 or higher. \n' +
      'Please update your version of Node.'
  );
  process.exit(1);
}
// 如果node的版本小于10，会输出错误信息并终止程序执行。
```

 ❌ 错误提示信息：

- 你的node版本为x.x.x，

- 运行create-react-app需要node10或更新版本

- 请升级你node的版本



```javascript
require('./createReactApp');
```

运行 ./createReactApp.js



## 核心 - `createReactApp.js`

### 提示信息

- 经过 `index.js` 中版本确认后，开始执行关键代码构建脚手架了。

```javascript
/** 
 * 提示信息，此处省略1409个字符
 * /
```

刚开始依旧是大段的提示信息



### 严格模式

```javascript
'use strict';
// 熟悉的严格模式
```



### 引入依赖

- 接下来是大量依赖的引入，对于第三方库，这里给出对应的 github 地址。

```javascript
const chalk = require('chalk');
```

美化文字样式，详见：[chalk](https://github.com/chalk/chalk)



```javascript
const commander = require('commander');
```

node.js 命令行接口的完整解决方案，详见：[commander](https://github.com/tj/commander.js)



```javascript
const envinfo = require('envinfo');
```

envinfo：开发环境的信息（系统、编程语言、数据库等），详见：[envinfo](https://github.com/tabrindle/envinfo)



```javascript
const fs = require('fs-extra');
```

fs-extra：扩展文件系统能力，详见：[node-fs-extra](https://github.com/jprichardson/node-fs-extra)



```javascript
const hyperquest = require('hyperquest');
```

hyperquest：优化HTTP请求，详见：[hyperquest](https://github.com/substack/hyperquest)



```javascript
const inquirer = require('inquirer');
```

inquirer：提升命令行交互能力，详见：[inquirer](https://github.com/SBoudrias/Inquirer.js/)



```javascript
const semver = require('semver');
```

semver：语义化版本号，详见：[semver](https://github.com/semver/semver)



```javascript
const spawn = require('cross-spawn');
```

cross-spawn：跨平台执行子进程的工具库，详见：[node-cross-spawn](https://github.com/moxystudio/node-cross-spawn)



```javascript
const tmp = require('tmp');
```

tmp：用于生成临时文件或目录，详见：[node-tmp](https://github.com/raszi/node-tmp)



```javascript
const unpack = require('tar-pack').unpack;
```

tar-pack：压缩&解压缩工具，详见：[tar-pack](https://github.com/ForbesLindesay-Unmaintained/tar-pack)



```javascript
const validateProjectName = require('validate-npm-package-name');
```

validate-npm-package-name：验证一个字符串是否为npm包名，详见：[validate-npm-package-name](https://github.com/npm/validate-npm-package-name)















- 其他几个为内部定义的模块

```javascript
const dns = require('dns');
const execSync = require('child_process').execSync;
const os = require('os');
const path = require('path');
const url = require('url');
```



### 定义关键数据

- 接下来定义了几个比较关键的数据

```javascript
const packageJson = require('./package.json');
// 获取到 package.json 中的信息

let projectName;
// 一会可能要用到的由用户定义的项目名称

const program = new commander.Command(packageJson.name)
// Command 对象是 node.js 中 EventEmitter 的扩展
```



- `program` 后面还接了一大堆东西，就是当我们执行 `create-react-app` 时对不同参数的处理。

```javascript
const program = new commander.Command(packageJson.name)

  // --version
  .version(packageJson.version)

  // 使用自定义项目名新建一个项目
  .arguments('<project-directory>')

  .usage(`${chalk.green('<project-directory>')} [options]`)

  .action(name => {
    projectName = name;
  })

  .option('--verbose', 'print additional logs')

  // --info 查看系统信息
  .option('--info', 'print environment debug info')

  .option(
    '--scripts-version <alternative-package>',
    'use a non-standard version of react-scripts'
  )

  .option(
    '--template <path-to-template>',
    'specify a template for the created project'
  )

  .option('--use-npm')

  .option('--use-pnp')

  .allowUnknownOption()

  // --help
  .on('--help', () => {
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`);
    console.log();
    console.log(
      `    A custom ${chalk.cyan('--scripts-version')} can be one of:`
    );
    console.log(`      - a specific npm version: ${chalk.green('0.8.2')}`);
    console.log(`      - a specific npm tag: ${chalk.green('@next')}`);
    console.log(
      `      - a custom fork published on npm: ${chalk.green(
        'my-react-scripts'
      )}`
    );
    console.log(
      `      - a local path relative to the current working directory: ${chalk.green(
        'file:../my-react-scripts'
      )}`
    );
    console.log(
      `      - a .tgz archive: ${chalk.green(
        'https://mysite.com/my-react-scripts-0.8.2.tgz'
      )}`
    );
    console.log(
      `      - a .tar.gz archive: ${chalk.green(
        'https://mysite.com/my-react-scripts-0.8.2.tar.gz'
      )}`
    );
    console.log(
      `    It is not needed unless you specifically want to use a fork.`
    );
    console.log();
    console.log(`    A custom ${chalk.cyan('--template')} can be one of:`);
    console.log(
      `      - a custom template published on npm: ${chalk.green(
        'cra-template-typescript'
      )}`
    );
    console.log(
      `      - a local path relative to the current working directory: ${chalk.green(
        'file:../my-custom-template'
      )}`
    );
    console.log(
      `      - a .tgz archive: ${chalk.green(
        'https://mysite.com/my-custom-template-0.8.2.tgz'
      )}`
    );
    console.log(
      `      - a .tar.gz archive: ${chalk.green(
        'https://mysite.com/my-custom-template-0.8.2.tar.gz'
      )}`
    );
    console.log();
    console.log(
      `    If you have any problems, do not hesitate to file an issue:`
    );
    console.log(
      `      ${chalk.cyan(
        'https://github.com/facebook/create-react-app/issues/new'
      )}`
    );
    console.log();
  })
  .parse(process.argv);
```

这里其实有用到 `jQuery` 中的链式调用的思想，每次调用方法都会返回一个 `Command` 对象。

当我们执行 create-react-app --help 时，会打印出上述一大段的 `console.log`，提示我们可以使用的参数，基本都可以在代码中找到，`--version`、`--verbose`、`--script-version`、`--template`、`--use-npm`、`--use-pnp`、`--help`。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1594623897523-d4d46112-a12b-4a88-9b0a-494eb38e9646.png)



### 两个判断

#### 第一个判断（info）

- 接下来是两个判断，首先如果我们输入的是 `create-react-app --info`，会按照固定格式打印出系统信息

```javascript
if (program.info) {
  console.log(chalk.bold('\nEnvironment Info:'));
  console.log(
    `\n  current version of ${packageJson.name}: ${packageJson.version}`
  );
  console.log(`  running from ${__dirname}`);
  return envinfo
    .run(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'npm', 'Yarn'],
        Browsers: ['Chrome', 'Edge', 'Internet Explorer', 'Firefox', 'Safari'],
        npmPackages: ['react', 'react-dom', 'react-scripts'],
        npmGlobalPackages: ['create-react-app'],
      },
      {
        duplicates: true,
        showNotFound: true,
      }
    )
    .then(console.log);
}
```

例如，当我输入 create-react-app --info 时，控制台输出的信息如下：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1594624458564-566682a0-45e9-48ee-8afa-785a33d3c1fa.png)

可以看到，同代码中的一模一样，打印出了 create-react-app版本、System信息、node相关信息、浏览器信息、react相关包信息、create-react-app相关信息（可能因为我是用yarn安装的所以没找到？）



#### 第二个判断（projectName 项目名）

- 判断我们是否给出了项目名，如果没给出，会输出错误提示并退出。

```javascript
if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:');
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  );
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-react-app')}`);
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  process.exit(1);
}
```

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1594624795632-8e6089ee-a00e-430b-9697-3196075da500.png)



### 开始创建（createApp）

#### 调用 `createApp()`

- 如果我们按照格式给出了项目名，那么接下来就开始创建App。

```javascript
createApp(
  projectName,							// 用户定义的项目名
  program.verbose,					// 额外日志
  program.scriptsVersion,		// 使用其他的 react-scripts
  program.template,					// 明确模板
  program.useNpm,						// 使用npm
  program.usePnp						// 使用pnpm?
);
```



#### `createApp()` 函数概述

- `createApp` 函数的主体如下

```javascript
function createApp(name, verbose, version, template, useNpm, usePnp) {
  ...
}
```



- 由于 createApp 函数代码比较长，我们抛弃一些细节，来试图分段理解一下。



#### 1. 检查node版本

```javascript
const unsupportedNodeVersion = !semver.satisfies(process.version, '>=10');
if (unsupportedNodeVersion) {
  console.log(
    chalk.yellow(
      `You are using Node ${process.version} so the project will be bootstrapped with an old unsupported version of tools.\n\n` +
      `Please update to Node 10 or higher for a better, fully supported experience.\n`
    )
  );
  // Fall back to latest supported react-scripts on Node 4
  version = 'react-scripts@0.9.x';
}
```



#### 2. 检查用户定义的项目名是否符合要求

```javascript
const root = path.resolve(name);
const appName = path.basename(root);

checkAppName(appName);
fs.ensureDirSync(name);
if (!isSafeToCreateProjectIn(root, name)) {
  process.exit(1);
}
console.log();
```

其中，值得注意的是 fs 作为文件读写的一个接口

另外一个值得注意的是 `checkAppName()` 这个函数，在800行左右可以看到它的源码如下。



```javascript
function checkAppName(appName) {
  const validationResult = validateProjectName(appName);
  if (!validationResult.validForNewPackages) {
    console.error(
      chalk.red(
        `Cannot create a project named ${chalk.green(
          `"${appName}"`
        )} because of npm naming restrictions:\n`
      )
    );
    [
      ...(validationResult.errors || []),
      ...(validationResult.warnings || []),
    ].forEach(error => {
      console.error(chalk.red(`  * ${error}`));
    });
    console.error(chalk.red('\nPlease choose a different project name.'));
    process.exit(1);
  }

  // TODO: there should be a single place that holds the dependencies
  const dependencies = ['react', 'react-dom', 'react-scripts'].sort();
  if (dependencies.includes(appName)) {
    console.error(
      chalk.red(
        `Cannot create a project named ${chalk.green(
          `"${appName}"`
        )} because a dependency with the same name exists.\n` +
          `Due to the way npm works, the following names are not allowed:\n\n`
      ) +
        chalk.cyan(dependencies.map(depName => `  ${depName}`).join('\n')) +
        chalk.red('\n\nPlease choose a different project name.')
    );
    process.exit(1);
  }
}
```

可以看到，基本就是做了两个判断

- 一是判断用户自定义项目名是否符合命名规则，如果不符合，就会给出错误提示并退出程序：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1594626722999-2a942450-29a0-4c98-b2ff-188bd9570343.png)

- 二是判断用户自定义的项目名是否和依赖冲突，如果冲突，会给出错误提示并退出程序：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1594626882048-33998a47-3e18-4ac2-96e5-02cd08fbda80.png)



#### 3. 提示开始创建

- 打印一行信息，告诉我们创建要开始了。

```javascript
console.log(`Creating a new React app in ${chalk.green(root)}.`);
console.log();
```



#### 4. 初始化 package.json

- 初始化一些基本信息，例如 name(项目名)、version(0.1.0)、private(true)，我们可以在生成的 cra-test 项目根目录下找到 package.json ，其中最开始几行就是这里初始化的。

```javascript
// package.json 最初的样子
const packageJson = {
  name: appName,
  version: '0.1.0',
  private: true,
};

// 写入文件
fs.writeFileSync(
  path.join(root, 'package.json'),
  JSON.stringify(packageJson, null, 2) + os.EOL
);
```



#### 5. yarn? npm? pnpm?

- 接下来是判断到底使用 yarn、npm、pnpm中的哪一个，此处的细节就不去深究了。我使用的是 `yarn`。

```javascript
const useYarn = useNpm ? false : shouldUseYarn();
  const originalDirectory = process.cwd();
  process.chdir(root);
  if (!useYarn && !checkThatNpmCanReadCwd()) {
    process.exit(1);
  }

  if (!useYarn) {
    const npmInfo = checkNpmVersion();
    if (!npmInfo.hasMinNpm) {
      if (npmInfo.npmVersion) {
        console.log(
          chalk.yellow(
            `You are using npm ${npmInfo.npmVersion} so the project will be bootstrapped with an old unsupported version of tools.\n\n` +
              `Please update to npm 6 or higher for a better, fully supported experience.\n`
          )
        );
      }
      // Fall back to latest supported react-scripts for npm 3
      version = 'react-scripts@0.9.x';
    }
  } else if (usePnp) {
    const yarnInfo = checkYarnVersion();
    if (yarnInfo.yarnVersion) {
      if (!yarnInfo.hasMinYarnPnp) {
        console.log(
          chalk.yellow(
            `You are using Yarn ${yarnInfo.yarnVersion} together with the --use-pnp flag, but Plug'n'Play is only supported starting from the 1.12 release.\n\n` +
              `Please update to Yarn 1.12 or higher for a better, fully supported experience.\n`
          )
        );
        // 1.11 had an issue with webpack-dev-middleware, so better not use PnP with it (never reached stable, but still)
        usePnp = false;
      }
      if (!yarnInfo.hasMaxYarnPnp) {
        console.log(
          chalk.yellow(
            'The --use-pnp flag is no longer necessary with yarn 2 and will be deprecated and removed in a future release.\n'
          )
        );
        // 2 supports PnP by default and breaks when trying to use the flag
        usePnp = false;
      }
    }
  }

  if (useYarn) {
    let yarnUsesDefaultRegistry = true;
    try {
      yarnUsesDefaultRegistry =
        execSync('yarnpkg config get registry').toString().trim() ===
        'https://registry.yarnpkg.com';
    } catch (e) {
      // ignore
    }
    if (yarnUsesDefaultRegistry) {
      fs.copySync(
        require.resolve('./yarn.lock.cached'),
        path.join(root, 'yarn.lock')
      );
    }
  }
```

如果使用的是 yarn，会生成 yarn.lock 文件。



#### 6. 执行 `run()` 函数（核心逻辑）

- `run()` 函数应该是整个 create-react-app.js 的核心，其中用到了大量的 Promise，Promise 我目前理解地不太深入，所以打算先简单介绍一下，后续再回来补充。
- `run()` 最重要的目的就是安装各种 packages，我们通过 `run()` 对其它函数的调用粗略地看一下整个过程。



### `run()` 函数（核心中的核心）

```javascript
Promise.all([
  getInstallPackage(version, originalDirectory),
  getTemplateInstallPackage(template, originalDirectory),
]).then(([packageToInstall, templateToInstall]) => {
  const allDependencies = ['react', 'react-dom', packageToInstall];

  console.log('Installing packages. This might take a couple of minutes.');

  Promise.all([
    // 获取包名
    getPackageInfo(packageToInstall),
    getPackageInfo(templateToInstall),
  ])
    .then(([packageInfo, templateInfo]) =>
      checkIfOnline(useYarn).then(isOnline => ({
        // 检查是否在线
        isOnline,
        packageInfo,
        templateInfo,
    	}))
		)
    .then(({ isOnline, packageInfo, templateInfo }) => {
    let packageVersion = semver.coerce(packageInfo.version);

    const templatesVersionMinimum = '3.3.0';

    // Assume compatibility if we can't test the version.
    // 查看npm包是否存在
    if (!semver.valid(packageVersion)) {
      packageVersion = templatesVersionMinimum;
    }

    // Only support templates when used alongside new react-scripts versions.
    const supportsTemplates = semver.gte(
      packageVersion,
      templatesVersionMinimum
    );
    if (supportsTemplates) {
      allDependencies.push(templateToInstall);
    } else if (template) {
      console.log('');
      console.log(
        `The ${chalk.cyan(packageInfo.name)} version you're using ${
        packageInfo.name === 'react-scripts' ? 'is not' : 'may not be'
        } compatible with the ${chalk.cyan('--template')} option.`
      );
      console.log('');
    }

    console.log(
      `Installing ${chalk.cyan('react')}, ${chalk.cyan(
        'react-dom'
      )}, and ${chalk.cyan(packageInfo.name)}${
      supportsTemplates ? ` with ${chalk.cyan(templateInfo.name)}` : ''
      }...`
    );
    console.log();

    // 开始安装进程
    return install(
      root,
      useYarn,
      usePnp,
      allDependencies,
      verbose,
      isOnline
    ).then(() => ({
      packageInfo,
      supportsTemplates,
      templateInfo,
    }));
  })
    .then(async ({ packageInfo, supportsTemplates, templateInfo }) => {
      const packageName = packageInfo.name;
      const templateName = supportsTemplates ? templateInfo.name : undefined;
      checkNodeVersion(packageName);
      setCaretRangeForRuntimeDeps(packageName);

      const pnpPath = path.resolve(process.cwd(), '.pnp.js');

      const nodeArgs = fs.existsSync(pnpPath) ? ['--require', pnpPath] : [];

      await executeNodeScript(
        {
          cwd: process.cwd(),
          args: nodeArgs,
        },
        [root, appName, verbose, originalDirectory, templateName],
        `
          var init = require('${packageName}/scripts/init.js');
          init.apply(null, JSON.parse(process.argv[1]));
        `
      );

      if (version === 'react-scripts@0.9.x') {
        console.log(
          chalk.yellow(
            `\nNote: the project was bootstrapped with an old unsupported version of tools.\n` +
            `Please update to Node >=10 and npm >=6 to get supported tools in new projects.\n`
          )
        );
      }
  	})
    .catch(reason => {
      console.log();
      console.log('Aborting installation.');
      if (reason.command) {
        console.log(`  ${chalk.cyan(reason.command)} has failed.`);
      } else {
        console.log(
          chalk.red('Unexpected error. Please report it as a bug:')
        );
        console.log(reason);
      }
      console.log();

      // On 'exit' we will delete these files from target directory.
      const knownGeneratedFiles = [
        'package.json',
        'yarn.lock',
        'node_modules',
      ];
      const currentFiles = fs.readdirSync(path.join(root));
      currentFiles.forEach(file => {
        knownGeneratedFiles.forEach(fileToMatch => {
          // This removes all knownGeneratedFiles.
          if (file === fileToMatch) {
            console.log(`Deleting generated file... ${chalk.cyan(file)}`);
            fs.removeSync(path.join(root, file));
          }
        });
      });
      const remainingFiles = fs.readdirSync(path.join(root));
      if (!remainingFiles.length) {
        // Delete target folder if empty
        console.log(
          `Deleting ${chalk.cyan(`${appName}/`)} from ${chalk.cyan(
            path.resolve(root, '..')
          )}`
        );
        process.chdir(path.resolve(root, '..'));
        fs.removeSync(path.join(root));
      }
      console.log('Done.');
      process.exit(1);
    });
});
```

## 【未完待续】