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

git checkout -b   branchname

强制覆盖远程分支：

git push origin 本地分支名:远程分支名 --force


问题：

要解决 Git 仍然提示 `origin/main2` 的问题，请按以下步骤操作：

### 1. **清理本地的远程分支引用**

即使远程仓库的 `main2` 已删除，本地的远程跟踪分支 `origin/main2` 可能仍存在。执行以下命令同步并清理本地缓存：

```
git fetch origin --prune
```

这会更新本地仓库的远程分支信息，并删除已不存在的远程分支引用（如 `origin/main2`）。

### 2. **检查当前分支的上游设置**

确认你的当前分支是否仍关联到 `origin/main2`：

```
git branch -vv
```

输出示例：

复制

```
* main 123abcd [origin/main2] Commit message
```

如果看到 `[origin/main2]`，说明上游仍指向已删除的分支。

### 3. **取消或更新上游分支**

#### 选项 1：直接取消上游关联

```
git branch --unset-upstream
```

这会移除当前分支的上游设置，之后 Git 不再跟踪任何远程分支。

#### 选项 2：重新关联到正确的远程分支（如 `origin/main`）

```
git branch -u origin/main
```

### 4. **切换分支（可选）**

如果当前分支本身是 `main2`，建议切换到其他分支（如 `main`）并删除本地 `main2`：

```
git checkout main      # 切换到 main 分支
git branch -D main2    # 强制删除本地的 main2 分支
```

### 5. **验证结果**

再次检查状态和分支信息：

```
git status
git branch -vv
```

此时应不再出现 `origin/main2` 的提示。

### 总结

问题根源在于本地仓库保留了已删除远程分支的引用。通过清理远程跟踪分支并更新上游配置，即可解决该提示。
