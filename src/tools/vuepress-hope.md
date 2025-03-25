---
title: 博客部署
---
# 初始化

npm init vuepress-theme-hope@latest my-docsnpm init vuepress-

* `npm run docs:dev` 启动开发服务器
* `npm run docs:build` 构建项目并输出
* `npm run docs:clean-dev` 清除缓存并启动开发服务器

修改部署文档：

加token和确定静态资源分支名

# GitHub

1、创建新仓库

2、设置仓库token

3、设置pages路径为 ph-pages --> save


# Git命令

1、git add remote origin 链接

2、git add .

3、git commit -m 'message'

4、git push origin main:main

一些其他命令：

创建新分支：

git checkout -b   <branchname><branchname>

强制覆盖远程分支：

git push origin 本地分支名:远程分支名 --force
