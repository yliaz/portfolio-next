---
index: 3
title: 在 Githug 游戏中学习 Git
description: Githug 让你可以在实践中学习Git，如果你还没玩过，推荐你去体验一下。
icon: git
date: 2020-04-03
category:
  - 技术博客
tag:
  - Git
---

[Github](https://github.com/Gazler/githug) 让你可以在实践中学习Git，如果你还没玩过，推荐你去体验一下。 

正如它的作者所言：Githug的目的是想让你可以通过实践学习git操作，你需要输入正确的git命令来闯关。

## 安装

Githug的安装方法很简单，首先确认你的电脑上已经安装了[Ruby](https://www.ruby-lang.org/en/documentation/installation/)，然后只需要执行以下的命令：

```shell
$ gem install githug
```

如果提示权限不够，需要加上sudo重新执行并输入密码：

```shell
$ sudo gem install githug
```

## 游戏开始

直接在终端输入 `githug` 命令就可以开始游戏了。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590392486199-0e87b46a-e016-43a9-9546-4bd07bc07d12-20211120230600653.png)

Githug为你提供了几个命令来帮助你完成游戏挑战：

- `githug play`：查看你已经完成的命令是否正确，如果正确会进入到下一关；
- `githug hint`：给你一些小提示；
- `githug reset`：重置本关；
- `githug levels`：显示所有关卡；

## 闯关

### 第1关（git init 初始化）

**【题目】**

一个新的名为git_hug的目录已经创建了，现在你需要对它进行初始化。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590392671169-e6c32264-e0c0-4f27-a4ee-1308d98c447c.png)

**【解答】**

使用 `git init` 进行git仓库的初始化

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590392794229-ca48b199-07f8-4a97-89a1-508a0d9dc1de.png)



### 第2关（git config 设置信息）

**【题目】**

设置你的用户名和邮箱

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590393081505-8b6ee624-8a9d-4acb-8b60-98936e2e100e.png)

**【解答】**

使用 `git config [字段] [值]` 加上对应字段来设置。我这里使用了 `--local` 使得设置仅在库内生效，全局生效需要使用 `--global`。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590393285420-04084672-09ed-401f-b5da-27279b729ac2.png)



### 第3关（git add 添加到暂存区）

**【题目】**

文件夹中有一个名为 `README` 的文件，请将它添加到你的暂存区。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590393612305-831c72e9-195e-4ed7-9691-53dc5f995612.png)

**【解答】**

使用 `git add [文件名]` 将文件添加到暂存区。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590394033056-24d4eef8-bd2e-4726-b0b1-00905e7778bb.png)



### 第4关（git commit 提交到分支）

**【题目】**

`README` 文件已经在暂存区中了，现在需要将暂存区中的文件提交到当前分支。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590394188918-4b5cf315-8b3e-4905-8ffa-5f6b3743754b.png)

**【解答】**

使用 `git commit -m [备注]` 将暂存区的所有文件提交到当前分支。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590394344180-32b86b95-ddb3-4d64-8980-976e8aded5b1.png)



### 第5关（git clone 远程仓库克隆到本地）

**【题目】**

将一个远程仓库克隆到本地。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590394509043-a9999496-bc3d-48e9-a98d-d6cf1dfa133d.png)

**【解答】**

使用 `git clone [远程仓库地址]` 可以将远程仓库克隆到本地。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590394624171-72deb016-b702-4fd6-b92d-f16bd9e24180.png)



### 第6关（git clone 克隆指定文件夹）

**【题目】**

将一个远程仓库克隆到本地指定文件夹。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590394902016-34610eae-74d8-40a2-a65d-59631cc7d8c1.png)

**【解答】**

使用 `git clone [远程仓库地址] [指定文件夹名]` 将远程仓库克隆到指定文件夹。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590395216602-7f5aa02c-202e-4108-be0b-d42922610508.png)



### 第7关（.gitignore 排除文件）

**【题目】**

将带有 `.swp` 后缀的文件排除在需要提交的文件之外。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590397407473-65e3138a-64aa-4021-9188-a3cd309f5cd4.png)

**【解答】**

添加一个 `.gitignore` 文件，然后在文件中加入要排除的文件名称。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590396027973-1bbd3e6a-daf3-4347-963f-c6b7e33ca8e3.png)

`.gitignore` 文件内容如下，我们在最后一行添加了一个 `*.swp`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590397075499-6c1de9b7-56ca-4e84-8314-1ac1f3fb8f25.png)



### 第8关（.gitignore 保留文件）

**【题目】**

将带有 `.a` 后缀的文件排除在需要提交的文件之外，但是要保留 `lib.a` 这个文件。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590397300361-89ebf158-590b-478f-9d91-0b5337694570.png)

**【解答】**

同上一个问题一样，我们需要通过修改 `.gitignore` 来实现

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590397440612-d6533fd7-a71a-485b-8c4e-75eaae23fa55.png)

在 `.gitignore` 文件中使用 `![文件名]` 可以保留某个特定的文件

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590397202893-a4acf0d9-e888-4195-bdb5-821f11b7894c.png)



### 第9关（git status 查看未追踪文件）

**【题目】**

查看未被git追踪的文件。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590398075624-a3725132-ca5d-45c5-a427-6decfce35337.png)

**【解答】**

使用 `git status` 查看，Untracked files下面红色的文件就是未被git追踪的。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590398181271-582b0e70-265c-4fe4-982c-25d12da2c899.png)



### 第10关（git status 查看未提交文件）

**【题目】**

查看处于暂存区且未被提交的文件。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590399164628-bab75694-7100-42eb-8099-a57e8d286e0e.png)

**【解答】**

仍然是使用 `git status` 查看，Changes not staged for commit下面的绿色文件就是处于暂存区中的未被提交的文件。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590398662968-cd7b1ca3-86d6-47d6-bcbe-7a6e494f6097.png)



### 第11关（git rm 移出版本库并删除文件）

【题目】

有一个文件从硬盘中删除了，但是并未从 git 仓库中删除，找到它并从 git 仓库中删除。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590400984688-46b3509c-0e4b-4d55-bfcc-2fae45dc8985.png)

【解答】

有时我们在文件管理器中将一个文件删除了，但是该文件并没有从版本库中删除。这时如果需要从版本库中删除该文件，那么就可以使用 `git rm` 命令。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590401229070-ca94574e-c455-43ef-9090-44d604ac5c5b.png)



### 第12关（git rm --cached 移出版本库但不删除文件）

【题目】

一个文件不小心被添加到你的git版本库中了，找到它并将它从暂存区中移除。注意只是将这个文件从版本库中移除，不要删除文件。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590401462256-a766ff6b-d6b3-4816-96b5-9716259bb62e.png)

【解答】

使用 `git rm --cached` 只会将文件从版本库中移除，而不会删除文件。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590401590514-0c81bfcb-39e6-44b2-ac6e-531a8d668311.png)



【小结】`git rm` 对比 `git rm --cached`

`git rm` ：删除文件，同时将文件移出git版本库；

`git rm --cached` ：将文件移出git版本库，但是不删除文件；



### 第13关（git stash 没改完回头再改）

【题目】

做了一些改动但是暂时不想提交，希望之后再回来进行一些改动。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590402432374-3da3dd5a-c79f-4a64-b756-7b102f758b7f.png)

【解答】

可以使用 git stash 将一些改动暂存起来，之后回过头来再继续修改。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590402511641-b0dbaad0-d4d7-450e-af9a-f47a21e8c63f.png)



### 第14关（git mv 修改文件名）

【题目】

修改文件名，并将修改提交到暂存区。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590402800195-ded64eaa-3fa2-4ded-b9a3-8e6420a0a617.png)

【解答】

使用 `git mv [旧文件名] [新文件名]` 可以实现修改文件名，并将修改提交到暂存区。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590402766954-7331fdbb-6f25-4653-8fb5-23f2a44f720a.png)



### 第15关（git mv 调整目录结构）

【题目】

新建一个名为src的文件夹，将所有的.html后缀的文件都移入这个文件夹中。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590403193256-b36b5b39-2b0a-4c3d-aeeb-c9bcb6b507e9.png)

【解答】

使用 git mv [文件名] [路径] 将指定文件移入指定路径，并将修改加入暂存区。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590403594189-f3e4b8ef-6c35-40cd-bc6f-deb6dfaab187.png)



### 第16关（git log 查看提交记录）

【题目】

查看提交记录，给出最近一次提交的hash值。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590404639176-7aa651c1-8cc7-4e08-ac7b-4ed5af65d365.png)

【解答】

使用 `git log` 查看提交记录。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590404758005-ab03265d-eea7-47af-9097-f76a548aabdd.png)

提交记录如下：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590404514930-049bf5d9-24b6-4cb5-a4cf-265c3d6c528e.png)



### 第17关（git tag 给提交做标记）

【题目】

将当前提交标记为“new_tag”

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590405143106-d68d48bc-b093-4d3c-9618-9a091ac69aa4.png)

【解答】

使用 `git tag [标记名称]` 给当前提交标记一个名称，也可以使用` git tag [标记名称] [id]` 给特定某个id的提交标记一个名称。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590405481012-82a32ac1-7553-4608-ae75-a48fd7949f1d.png)

可以使用 `git log` 查看一下，可以看到 `tag: new_tag`。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590405428272-00a1772c-a9c9-4eb0-a2a0-de6c33e5ddc2.png)



### 第18关（git push origin --tags 推送标签到远程仓库）

【题目】

将本地标签（tags）全部推送到远程git仓库。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590406150759-02c3f236-6265-4c49-a6a5-6f29eaf823ef.png)

【解答】

使用 `git push origin [标签名]` 可以将某个标签推送到远程仓库，使用 `git push origin --tags` 可以将所有本地标签都推送到远程仓库。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590406113374-de130bdc-f9d7-4b8b-aab5-81397c4e2a5d.png)

需要这样做的原因是：默认情况下，`git push`不会将标签推送到远程仓库，因此需要显式推送。



### 第19关（git commit --amend 修改最近一次提交）

【问题】

上一次提交时，有一个文件忘记加入了，希望能修改最近一次提交，把这个文件提交进去。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590407926058-2da253d5-a79f-4fe5-80fd-7876642f2d3f.png)

【解答】

我们先使用 git log 打印一下提交记录

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590407758596-4952d7a5-22db-457f-b29b-d292ea68dac5.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590407724619-d7c17efb-7390-48ff-bf47-56b068fadde7.png)

然后尝试用 git commit --amend 修改最近一次提交。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590407783166-d17e5d14-c054-4e08-bfe7-7d2a4f8dc7eb.png)

我们使用 git log 将最近的提交打出来。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590407812557-65de1719-b138-4232-80be-6cb110e22fd6.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590407989451-694f4f82-0e0d-4a4e-b56b-4a4b9a197639.png)



### 第20关（git commit [时间] 指定提交时间）

【问题】

指定提交的时间（未来某个时间）

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590408335971-1b42192f-b72c-4ab9-a1fe-0d7736701725.png)

【解答】

使用 `git commit --date=" "` 指定提交时间

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590408586315-787a718e-8521-41b5-a958-e650e490a8d5.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590408536528-2a3b76c5-eaa6-4d90-a064-f1d3ddcf07be.png)



### 第21关（git reset HEAD [文件名] 将文件取回到暂存区）

【问题】

有两个文件被提交了，但是事实上我们希望先提交其中的一个，再去提交另外一个。我们希望将其中一个先放回暂存区。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590408930704-b6640d4a-5572-4ce0-99c0-da8d8bd7b5d6.png)

【解答】

使用 `git reset HEAD [文件名]` 将指定文件取回到暂存区。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590409141049-0a68b34d-e2fb-41c1-9842-294c3fb68c30.png)



### 第22关（git reset 撤销上一次提交）

【问题】

上一次提交太快了，希望可以撤回。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590410452102-466a3214-eb0a-4e44-a91a-1a7349f607f0.png)

【解答】

我们先使用 `git log` 看一下目前的提交记录：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590409358589-36383897-c1d3-41bf-bd82-458d625772de.png)

我们使用 `git reset --soft` 将上一次的提交放入暂存区

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590409832648-a6d27ea4-d1c3-491a-8c7d-3e4b1e070cf4.png)

再次使用 git log 查看一下提交记录：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590409529042-e4f080a1-1162-4b48-b66a-7a8964cb48f6.png)

使用 git status 查看一下暂存区的情况：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590410088588-5fc9a323-8802-4329-b1d4-8b99efb6aaf0.png)

【小结】撤销上一次提交有三种方式：

- 将上一次提交放入暂存区：`--soft`
- 将上一次提交放回工作区：`--mixed`
- 直接抛弃：`--hard`



### 第23关（git checkout 恢复到上一次）

【问题】

放弃当前修改，使用上一次提交的结果。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590410474205-08ff28de-71d9-4fdf-b486-6a30a3b259ef.png)

【解答】

使用 `git checkout [文件名]`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590410406668-ab4abc8d-58db-45d4-a39e-0554c9aae756.png)



### 第24关（git remote 查看远程仓库）

【问题】

查看一下远程仓库。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590410582415-b705d7e6-138d-4064-bcf2-2d7f03c2971e.png)

【解答】

使用 `git remote`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590410621915-1f55c167-819c-41d4-8e98-b8fd451e6be1.png)



### 第25关（git remote -v 查看远程仓库及地址）

【问题】

查看远程仓库以及它们的地址。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590410703804-d1fe257e-2d40-4ef0-9178-c794a836cb16.png)

【解答】

使用 `git remote -v`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590410770368-6170fb0a-1d8f-442c-894e-2ba392152c29.png)



### 第26关（git pull origin [远程分支]）

【问题】

拉取远程仓库中分支到本地

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590411000178-0b693c61-6949-4674-a424-33311d6ad294.png)

【解答】

使用 `git pull origin [远程分支]`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590411058812-9b9efbe0-c997-4fa8-8f2e-becfdfbabb27.png)



### 第27关（git remote add origin [远程仓库地址]）

【问题】

添加远程仓库地址

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590411258333-0198edcb-3e76-42fb-a8fa-83a10c0bbfc3.png)

【解答】

使用 `git remote add origin [远程仓库地址]`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590411274619-c28d1a85-5f4d-47cc-a0b4-a7e374694073.png)



### 第28关（git rebase 变基 && git push 推送到远程仓库）

【问题】

先变基再推送

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590417611672-c86082b7-3959-48d0-bd4c-5487beaf9f53.png)

【解答】

先使用 git rebase 变基，再使用 git push 推送到远程仓库。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590417771859-ae5b5e7f-2e55-4af8-bf9b-af609799911f.png)



### 第29关（git diff 查看代码变动）

【问题】

查看代码和上一次提交相比有哪些变动。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590418507868-751dda87-49bb-4d08-ae7b-d30b2f6c0c3d.png)

【解答】

使用 `git diff`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590418086346-74e9873d-e09f-42b9-be56-2c445de9115c.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590417859030-fe6b427a-e57c-4397-bde4-a5c322a16ced.png)

**【git diff 更多用法】**

`git diff` ：比较工作区和暂存区

`git diff --cached` ：比较暂存区和git仓库

`git diff HEAD` ：查看工作目录和最近一次提交的内容差异



### 第30关（git blame 查看文件修改人）

【问题】

查看文件修改人。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590418811361-20a50c85-1362-4654-a1b3-77bb681e65c0.png)

【解答】

使用 git blame 可以列出文件中每行的修改人

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590418741905-4aa8d250-ea28-47ac-939e-0961a4142976.png)

使用 `git blame` 命令后，会显示每行的修改人。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590418698761-15cc6f1b-d4f3-4ecb-9932-c980de4d325b.png)



### 第31关（git branch 创建分支）

【问题】

创建一个新的分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590418991293-785609d1-9210-4e7c-8bfb-f4aeac5597b9.png)

【解答】

使用 `git branch [分支名]` 创建一个新的分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590419158571-ceeb3ec1-377e-4aab-b2d0-fe82c8293639.png)

使用 `git branch` 查看分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590419092038-d0ef3aa8-739f-4a37-a1c8-d760f34206c7.png)



### 第32关（git checkout 切换分支）

【问题】

创建一个新的分支，并切换过去

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590419242571-82b0dc27-c3d2-44c6-a1ec-bb7bd9218668.png)

【解答】

使用 git branch 创建分支，使用 git checkout 切换分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590419324251-29a5825f-2f17-4aac-8bfa-d4651d12fecc.png)



### 第33关（git checkout [标签名] 按标签名切换分支）

【问题】

切换到某个标签名的分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590419594006-bd58dd4d-a69b-4ffd-a7d4-1c4c86500765.png)

【解答】

使用 `git tag` 查看所有标签

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590419734574-34bfb16a-21f8-4f44-abed-37c19d60a4c1.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590419533090-5d9665b5-0aca-4b35-a3a7-9f9bc5f883c0.png)

使用 `git checkout [标签名]` 切换到某个标签名的分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590419752806-58db4d87-c698-4df6-8d41-1e1d4cb5c147.png)



### 第34关（git checkout tags over branch）

【问题】

切换到某个特定的分支，但是分支名和标签名重叠了。

【解答】

命令还是git checkout，可以使用tags指定标签名。
先使用git log 查看一下提交记录。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590457691884-8bc7c8f6-503e-4ec8-9ec0-63ce27003a40.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590457512801-a0dd8928-d5b2-45d4-82e8-14a23f3a82d5.png)

- 然后使用 git checkout tags/[标签名] 切换到特定标签名的分支。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590457778477-f5844d4f-8f5e-410e-80f1-300e829b7756.png)



### 第35关（git branch 为指定提交创建分支）

【问题】

为当前提交的前一个提交创建一个分支。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590457964572-1fcb1a85-1a4f-4393-962f-730b69d51910.png)

【解答】

使用 `git branch [分支名] [位置]`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590458128581-50c2f306-ec88-48c0-bbfb-9bb618d8a661.png)

使用 `git log` 可以看到添加后的分支 test_branch

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590458095688-5d680ea9-752e-46c8-8734-3d5296aa384b.png)

【`~` 和 `^`】

参考资料：[~ 和 ^ 的区别是什么？ - Stack Overflow](https://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git)

简单总结一下：

- `~n`： 获取第n代的祖先提交；
- `^n`：获取第n个父提交；

有一个非常经典的例子：

```plain
G   H   I   J
 \ /     \ /
  D   E   F
   \  |  / \
    \ | /   |
     \|/    |
      B     C
       \   /
        \ /
         A

A =      = A^0
B = A^   = A^1     = A~1
C = A^2
D = A^^  = A^1^1   = A~2
E = B^2  = A^^2
F = B^3  = A^^3
G = A^^^ = A^1^1^1 = A~3
H = D^2  = B^^2    = A^^^2  = A~2^2
I = F^   = B^3^    = A^^3^
J = F^2  = B^3^2   = A^^3^2
```



### 第36关（git branch -d 删除分支）

【问题】

删除一个古老的分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590458982137-726dc067-c57a-44eb-8e70-4f05c60bbc36.png)

【解答】

使用 `git branch -d [分支名]` 删除一个分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590459017684-cb791d52-6fc3-4d70-8fc9-987a43b33998.png)



### 第37关（git push 将分支推送到远程仓库）

【问题】

将一个分支推送到远程仓库

【解答】

先使用 git branch 查看一下本地分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590459258298-34e9021c-15f4-4931-ba80-3ed46c25b08d.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590459228626-e05b27e3-d021-4070-aea9-1bd4835629b1.png)

使用 `git push [远程仓库名] [本地分支名]:[远程分支名]` 将本地分支推送到远程仓库

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590459563649-2326c4fb-05a1-4f5c-afba-e5b2a09e646d.png)



### 第38关（git merge 合并分支）

【问题】

将 feature 分支合并到 master 分支

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590460190522-da2459ef-87b2-4a5e-8c7b-8b0221114325.png)

【解答】

使用 `git merge [分支名]`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590460222377-670b9cbe-7f1c-4845-a239-821430a5368d.png)

【`git merge` 和 `git rebase` 的区别】

参考资料：[【掘金】Git merge 和 rebase 分支合并命令的区别 - 富途Web开发团队](https://juejin.im/post/5af26c4d5188256728605809)



### 第39关（git fetch 获取）

【问题】

获取远程仓库中的修改，但不合并到当前分支。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590472514461-3a8266bd-3350-442f-9084-49f2785e0f7c.png)

【解答】

使用 `git fetch`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590472547208-1fd79ffd-1bc5-466f-b3e2-68910aee2609.png)

```
git pull` **=** `git fetch` **+** `git merge
```



### 第40关（git rebase 变基）

【问题】

将一个分支通过变基的方式合并到master分支。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590473608862-7519da0f-2141-4a16-a8a3-81be15b55bb3.png)

【解答】

先使用 `git log --graph --all` 查看一下提交记录：

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590473876224-c67ca5ee-fe47-4ef5-8c83-be74ea983302.png)

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590473717334-e8965a5e-6c0c-4f70-8d35-d66f56403809.png)

然后我们切换到feature分支，执行变基操作

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590473924687-ba8534f1-1342-4f6e-947a-89a1cd88f4c7.png)

完成后再查看一下提交记录，可以发现其中的变化

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590473792655-8be82856-5602-4138-aa4c-f2136690e119.png)

完成！

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590474694762-59b0b5b4-1443-400e-875b-278b17d1fc9a.png)

【关于git rebase】

关于变基，可以查看资料[变基 - git](https://git-scm.com/book/zh/v2/Git-分支-变基)

【变基做了什么】总结一下，变基所做的就是找到这两个分支的最近共同祖先，然后对比历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底，最后将之前另存为零时文件的修改依次应用。

【git rebase 和 git merge 异同】git rebase 和 git merge 最终的结果代码是相通的，但是提交记录确实不同的。使用 git rebase 的提交历史记录会更加整洁

【什么时候使用git rebase】例如向某个其他人维护的项目贡献代码时，首先在自己的分支里开发，开发完成后，将自己的代码变基到origin/master上，再提交给主项目，会方便项目的维护者快速整合。

【什么时候别用git rebase】如果提交存在于你的仓库之外，别人可能基于这些提交进行开发，那么请不要变基。否则会遭到唾弃！



### 第41关（git rebase --onto 变基到指定分支）

【问题】

本来要从master分支穿件的新分支不小心被创建成了wrong_branch上，需要执行一次变基操作。

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590475618674-10388e0c-c72d-4ce5-ac7c-b0d44155e906.png)

【解答】

使用 `git rebase --onto [新分支] [原分支]`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590475644506-ca69adf3-17f9-49f0-a9e9-cb968faf101f.png)



### 第42关（git repack ？？？）

【问题】

优化仓库打包结构？去除冗余包？

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590475996754-aed7c93e-534b-407c-abda-b76ac841c570.png)

【解答】

使用 `git repack -d`

![img](https://zhuye-1308301598.file.myqcloud.com/markdown/1590476012570-b1e9f218-7e0b-4241-83b0-cd3996092fa2.png)

这题我确实没搞懂，以后懂了再回来更新。



### 第43关（未完待续）

后面的东西越来越难了。。。