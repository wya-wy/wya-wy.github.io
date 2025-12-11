# 网站部署指南

本指南将帮助您将个人网站部署到公共服务器，使他人能够访问您的网站。

## 选项1：使用GitHub Pages（推荐）

GitHub Pages是GitHub提供的免费静态网站托管服务，非常适合个人网站和项目展示。

### 步骤1：创建GitHub账号

如果您还没有GitHub账号，请先注册：[GitHub注册](https://github.com/join)

### 步骤2：创建GitHub仓库

1. 登录GitHub账号
2. 点击右上角的"+"按钮，选择"New repository"
3. 仓库名称可以是：`yourusername.github.io`（其中yourusername是您的GitHub用户名）
4. 选择"Public"（公开）
5. 勾选"Initialize this repository with a README"
6. 点击"Create repository"

### 步骤3：将本地项目上传到GitHub

1. 打开命令行终端（Windows用户可以使用Git Bash或PowerShell）
2. 导航到您的项目目录：
   ```bash
   cd c:\Users\21346\Desktop\信息交互作业\network
   ```
3. 初始化Git仓库：
   ```bash
   git init
   ```
4. 将所有文件添加到暂存区：
   ```bash
   git add .
   ```
5. 提交更改：
   ```bash
   git commit -m "Initial commit"
   ```
6. 添加GitHub远程仓库：
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   ```
   （替换yourusername为您的GitHub用户名）
7. 推送代码到GitHub：
   ```bash
   git push -u origin master
   ```

### 步骤4：启用GitHub Pages

1. 进入GitHub仓库页面
2. 点击"Settings"选项卡
3. 向下滚动到"GitHub Pages"部分
4. 在"Source"下拉菜单中选择"master branch"
5. 点击"Save"按钮
6. 等待几分钟后，您的网站将可以通过 `https://yourusername.github.io` 访问

## 选项2：使用Netlify部署

Netlify是一个现代化的静态网站托管平台，提供免费的部署和自定义域名服务。

### 步骤1：注册Netlify账号

访问[Netlify官网](https://www.netlify.com/)并注册账号。

### 步骤2：连接GitHub仓库

1. 登录Netlify账号
2. 点击"New site from Git"
3. 选择"GitHub"
4. 授权Netlify访问您的GitHub账号
5. 选择您的网站仓库

### 步骤3：配置部署设置

1. 构建命令：留空（因为这是纯静态网站）
2. 发布目录：留空（默认使用根目录）
3. 点击"Deploy site"

### 步骤4：访问网站

部署完成后，Netlify将为您提供一个随机生成的域名（如 `your-site-name.netlify.app`），您可以通过该域名访问您的网站。

## 选项3：使用Vercel部署

Vercel是另一个优秀的静态网站托管平台，与Netlify类似。

### 步骤1：注册Vercel账号

访问[Vercel官网](https://vercel.com/)并注册账号。

### 步骤2：导入项目

1. 登录Vercel账号
2. 点击"New Project"
3. 选择"Import from Git Repository"
4. 选择GitHub并授权
5. 选择您的网站仓库

### 步骤3：部署项目

1. Vercel将自动检测您的项目类型
2. 点击"Deploy"
3. 部署完成后，您将获得一个免费的域名（如 `your-site-name.vercel.app`）

## 选项4：使用自定义域名

如果您拥有自己的域名，可以将其绑定到您的网站：

### GitHub Pages绑定自定义域名

1. 在GitHub仓库中创建一个名为`CNAME`的文件，内容为您的域名（如 `www.yourdomain.com`）
2. 推送CNAME文件到GitHub
3. 在您的域名注册商处，将CNAME记录指向 `yourusername.github.io`
4. 在GitHub仓库设置中，在GitHub Pages部分填写您的自定义域名

### Netlify/Vercel绑定自定义域名

1. 在Netlify/Vercel的项目设置中找到"Domain settings"
2. 点击"Add custom domain"
3. 输入您的域名
4. 按照提示在域名注册商处配置DNS记录

## 测试部署效果

部署完成后，您可以通过以下方式测试网站是否可以正常访问：

1. 在浏览器中输入您的网站URL（如 `https://yourusername.github.io`）
2. 检查网站的所有功能是否正常工作
3. 测试在不同设备上的显示效果

## 自动更新网站

当您修改了本地网站文件后，可以通过以下步骤更新线上网站：

1. 添加更改到暂存区：`git add .`
2. 提交更改：`git commit -m "Update website content"`
3. 推送更改到GitHub：`git push`
4. GitHub Pages/Netlify/Vercel将自动重新部署您的网站

## 注意事项

1. 确保所有文件路径都是相对路径（不使用绝对路径）
2. 图片资源建议使用相对路径或CDN链接
3. 定期备份您的网站文件
4. 遵循各平台的使用条款

如果您在部署过程中遇到问题，可以参考各平台的官方文档或寻求社区帮助。