---
title: 利用 GitHub Actions 实现自动部署
---

# 利用 GitHub Actions 实现自动部署

自动部署是通过使用 GitHub Action 来实现的，很好用，大致有以下这么几个步骤。

## 提供访问权限

思路是借助本机的密钥，让 GitHub Action 使用的机器有权访问我的云服务器（因为本机已经添加了权限）。

### 生成密钥

如果之前没有生成过密钥，需要先生成。

```shell
# 生成
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 进入.ssh文件夹
cd ~/.ssh

# 复制私钥 id_rsa
cat id_rsa
```

### 项目仓库设置私钥

将上一步复制的**私钥**添加到 GitHub Action。

![image-20220415085544315](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220415085544315.png)

### 云服务器设置公钥

我使用的是腾讯云

```shell
# 登陆云服务器
ssh root@101.xx.xx.151

# 进入放置公钥的文件夹
cd .ssh

# 新建（或打开）authorized_keys 文件
vi authorized_keys

# 将本地 id_rsa.pub 中的内容复制进去，并保存退出
```

![image-20220415090116166](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220415090116166.png)

![image-20220415090437058](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220415090437058.png)

现在 GitHub Action 就可以访问和操作我们的云服务器了。



## 编写脚本

在本地项目中新建一个文件 `main.yml`。

```shell
# 在根目录下运行
touch .github/workflows/main.yml
```

填入以下内容，其中有一些内容需要根据个人的需求进行修改。

```yaml
name: Build app and deploy to tencent cloud
on:
  #监听push操作，在进行 git push 时会执行这个 action
  push:
    branches:
      # master分支，你也可以改成其他分支
      - master
jobs:
  build:
    # runs-on 指定job任务运行所需要的虚拟机环境(必填字段)
    runs-on: ubuntu-latest
    steps:
      # 获取源码
      - name: Checkout
        # 使用action库  actions/checkout获取源码
        uses: actions/checkout@master
      # 安装 Node-16
      - name: use Node.js 16.13.2
        # 使用action库  actions/setup-node安装node
        uses: actions/setup-node@v1
        with:
          node-version: 16.13.2
      # 安装依赖
      - name: yarn install
        run: yarn install
      # 打包
      - name: yarn run build
        run: yarn run build
      # 部署到腾讯云
      - name: Deploy to Tencent Cloud
        uses: easingthemes/ssh-deploy@v2.1.1
        env:
          # 私钥
          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
          # scp参数
          ARGS: "-avzr --delete"
          # 源目录，编译后生成的文件目录
          SOURCE: "./build"
          # 服务器ip：换成你的服务器IP
          REMOTE_HOST: "101.32.26.xxx"
          # 用户
          REMOTE_USER: "root"
          # 目标地址 你在服务器上部署代码的地方
          TARGET: "/www/portfolio"

```

现在，我们在本地将代码 push 到远程仓库后，就会自动运行这个脚本了。离胜利只剩最后一步了。

## 配置服务器的 nginx

我是在 `/etx/nginx/conf.d` 目录下新建了一个配置，当然也可以使用 `sites-enabled` 目录，下面是我的文件内容。

涉及到申请 ssl 的证书，腾讯云有详细的教程，这里不再赘述。

```
# zhuye-dev.conf

server{
    listen 80;  # 指定端口，nginx默认端口为80
    server_name zhuye.dev;  # 指定域名
    location / {
        root /www/portfolio/build;  # 指定静态网站根目录
        index index.html;  # 指定默认访问文件
    }
}

# 腾讯云 https 访问配置
server {
    #SSL 访问端口号为 443
    #listen 443;
    #启用 SSL 功能
    #ssl on;
    # 由于版本问题，配置文件可能存在不同的写法。此处需要使用 listen 443 ssl 代替以上写法
    listen 443 ssl;
    #填写绑定证书的域名
    server_name zhuye.dev;
    #证书文件名称（此处的证书文件放在 /etc/nginx/ssl-nginx-qcloud 目录下）
    ssl_certificate ./ssl-nginx-qcloud/1_zhuye.dev_bundle.crt;
    #私钥文件名称（此处的私钥文件放在 /etc/nginx/ssl-nginx-qcloud 目录下）
    ssl_certificate_key ./ssl-nginx-qcloud/2_zhuye.dev.key;
    ssl_session_timeout 5m;
    #请按照以下协议配置
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准（照抄即可不用修改）。
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;

```

配置好 nginx，其他用户就可以通过域名访问到我们的网站了。

> 因为这篇文章是后面总结的，所以可能有部分遗漏，如果遇到问题可以直接 google。
