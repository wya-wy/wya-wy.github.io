# 个人网站 - 项目展示

这是一个使用纯HTML、CSS和JavaScript创建的个人网站，用于展示项目介绍并允许公开访问。

## 功能特点

- 响应式设计，支持各种设备访问
- 项目展示区域，可添加多个项目
- 个人简介和联系方式
- 平滑滚动导航
- 滚动动画效果
- 回到顶部按钮

## 项目结构

```
network/
├── index.html       # 网站主页面
├── style.css        # 网站样式文件
├── script.js        # 网站交互功能
└── README.md        # 项目说明文档
```

## 如何使用

1. 克隆或下载项目文件
2. 使用文本编辑器打开 `index.html` 文件
3. 修改以下内容：
   - 个人信息（姓名、简介等）
   - 项目介绍（名称、描述、图片等）
   - 联系方式（邮箱、GitHub链接等）
4. 保存文件后，直接在浏览器中打开 `index.html` 即可查看效果

## 部署方式

### 1. 使用GitHub Pages

1. 将项目上传到GitHub仓库
2. 在仓库设置中开启GitHub Pages
3. 选择主分支和根目录
4. 等待几分钟后，即可通过GitHub Pages提供的URL访问网站

### 2. 使用Netlify或Vercel

1. 访问Netlify或Vercel官网
2. 连接GitHub仓库
3. 按照提示进行部署配置
4. 部署完成后，即可获得公开访问URL

### 3. 使用传统服务器

1. 将项目文件上传到服务器的网页根目录
2. 配置服务器以支持静态文件访问
3. 通过服务器的域名或IP地址访问网站

## 自定义修改

### 修改颜色主题

在 `style.css` 文件中修改以下变量或直接修改对应选择器的颜色值：

```css
/* 主要颜色 */
header, .btn-secondary {
    background-color: #2c3e50; /* 修改为您喜欢的颜色 */
}

/* 强调色 */
.hero {
    background: linear-gradient(135deg, #3498db, #2980b9); /* 修改为您喜欢的渐变颜色 */
}

.btn {
    background-color: #e74c3c; /* 修改为您喜欢的颜色 */
}
```

### 添加新项目

在 `index.html` 文件的 `<section id="projects">` 区域内添加新的项目卡片：

```html
<div class="project-card">
    <div class="project-image">
        <img src="项目图片URL" alt="项目名称">
    </div>
    <div class="project-content">
        <h3>项目名称</h3>
        <p>项目描述...</p>
        <a href="项目链接" class="btn btn-secondary">查看详情</a>
    </div>
</div>
```

### 修改个人信息

在 `index.html` 文件的 `<section id="about">` 和 `<section id="contact">` 区域内修改个人信息。

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License
