---
title: 配置服务器
---

## 配置 root 用户

先用站内信收到的密码登陆服务器，由于我选择的是 ubuntu 系统，登陆后默认是 ubuntu 这个用户。

```shell
ssh ubuntu@xxx.xxx.xxx.xxx # 服务器的公网 IP
# 输入密码后按回车
sudo passwd root
# 输入 root 用户的密码，需要输两次
sudo vi /etc/ssh/sshd_config
# 找到PermitRootLogin，将它后面改为yes，保存（esc + :wq）
# 重启 ssh 服务
sudo service ssh restart
```

## 配置 ssh 免密登陆和快速登录

### 生成 ssh-key

> 如果有了则不需要重新生成

```shell
ssh-keygen -p -f ~/.ssh/id_rsa -m pem
 3228  cd ~/.ssh
 3229  ls
```



将你本地的 `~/.ssh/id_rsa.pub` 的内容粘贴到服务器上 `~/.ssh/`



### 免密登录：authorized_keys







### 快速登录：ssh-config









## 修改域名的DNS解析服务器





### 测试

```
ping zhuye.dev
```
