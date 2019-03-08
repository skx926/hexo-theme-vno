hexo-theme-vno
========

这个主题是修改自lenbo-ma的 [hexo-theme-vno](https://github.com/lenbo-ma/hexo-theme-vno)，修复了`桌面版切换页面侧边栏布局闪烁`和`移动版侧边栏展开后会自动收缩`等问题并增加下面的新功能：

- 增加了内容页显示上一篇和下面文章
- 增加归档页
- 去除多说使用disqus
- 增加apple-touch-icons
- 增加数学公式显示
- 增加fancybox预览图片



# 数学公式的显示

1. pc端下载安装[pandoc](http://pandoc.org/installing.html)

2. 进入博客目录执行下面的命令

   ```bash
   // 删除自带渲染引擎
   $ npm uninstall hexo-renderer-marked --save
   // 安装 pandoc 渲染引擎
   $ npm install hexo-renderer-pandoc --save
   // 删除 hexo-math
   $ npm uninstall hexo-math --save
   // 安装 mathjax
   $ npm install hexo-renderer-mathjax --save
   ```

3. All done！使用`hexo s`运行起来看看效果吧😄

## Demo Show

[Demo: 我的博客](http://skx926.com)

### 桌面版

![主页封面](source/images/show/home.png)

![文章列表](source/images/show/list.png)

![文章内容](source/images/show/page.png)

![文章归档](source/images/show/archive.png)

### 移动版

![移动设备主页封面](source/images/show/home-mobile.png)

![移动设备文章列表](source/images/show/list-mobile.png)

![移动设备文章内容](source/images/show/page-mobile.png)

![移动设备文章归档](source/images/show/archive-mobile.png)

## Copyright & License

Copyright (c) 2017  Released under the [MIT license](LICENSE).
