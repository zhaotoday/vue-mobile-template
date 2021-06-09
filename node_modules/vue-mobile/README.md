## 关于

#### 简介

Vue Mobile 是一个基于 Vue 的移动端 UI 框架，为多端开发而生，支持发布到 iOS、Android、H5、以及各种小程序。

#### 依赖框架

Uni App 框架。

#### 技术栈

Vue、Vuex、ES6、Sass、PostCSS 等。

#### 开发工具

HBuilderX IDE。

## 示例项目

https://github.com/zhaotoday/uni-app

## 使用

#### 命令

```bash
# 安装
$ npm install vue-mobile --save

# 格式化代码
$ npm run format

# 校验代码
$ npm run lint
```

#### 开发与构建

请参考 HBuilderX 的使用。

#### 目录规范

```
|- assets               待编译的静态资源
|  |- images            图片（必须小于 40K）
|     |- components     组件图片
|        |- icon        icon 组件图片
|  |- styles            样式
|     |- global         全局样式
|     |- utils          Sass 工具
|        |- variables   Sass 变量
|
|- components           组件
|  |- icon              icon 组件
|     |- index.vue      icon 组件模板
|     |- script.js      icon 组件脚本
|     |- style.scss     icon 组件样式
|
|- mixins               混合
|
|- models               数据模型
|  |- public            前端数据模型
|     |- wx-users       微信用户数据模型
|  |- wx                微信端数据模型
|     |- wx-users       微信用户数据模型
|
|- pages                页面
|  |- home              主页
|     |- index.vue      主页模板
|     |- script.js      主页脚本
|     |- style.scss     主页样式
|
|- plugins              插件
|
|- static               无需编译的静态资源
|  |- images            图片
|
|- store                Vuex 状态管理
|  |- modules           Vuex 状态管理模块拆分
|     |- public         前端状态管理
|        |- wx-users    微信用户状态管理
|     |- wx             微信端状态管理
|        |- wx-users    微信用户状态管理
|
|- utils                工具
```

#### 定义 Sass 变量

可定义 CDN 地址/版本、本地图片地址、色值、组件相关 Sass 变量、自定义 Sass 变量等。

```scss
// CDN 地址
$cdn: "http://localhost:88";

// CDN 版本号
$cdn-version: 0.1;

// 图片地址
$image-url: "~@/assets/images/components";

// 色值
$colors: (
  c11: white,
  c12: black,
  ...
);

// button
$button-widths: 680px, 84px;
```

#### 覆盖 Vue Mobile 内置组件默认的图片资源

请参考 Vue Mobile 图片目录结构，将图片放置在 assets/images/components/ 目录下。

> 注：需要修改 Sass 变量 $image-url，指向对应目录：$image-url: "~@/assets/images/components";

#### 按需引用内置组件样式

assets/styles/global/index.scss

```scss
@import "../utils/index";
@import "~vue-mobile/assets/styles/global/classes/colors";
@import "~vue-mobile/assets/styles/global/classes/font-sizes";
@import "~vue-mobile/assets/styles/global/classes/iconfont";
@import "~vue-mobile/assets/styles/global/components/avatar";

// 引用其他内置组件样式

@import "~vue-mobile/assets/styles/global/objects/grid";
@import "~vue-mobile/assets/styles/global/objects/media";
@import "~vue-mobile/assets/styles/global/reset/index";
@import "~vue-mobile/assets/styles/global/utils/base";
@import "~vue-mobile/assets/styles/global/utils/margin";
@import "~vue-mobile/assets/styles/global/utils/padding";
```

#### 按需引用并注册内置组件

main.js

```js
import Vue from "vue";
import App from "@/App";
import globalPlugin from "@/plugins/global";
import Checkbox from "vue-mobile/components/checkbox";

// 引用其他内置组件

Vue.config.productionTip = false;

Vue.use(globalPlugin);

Vue.component("c-checkbox", Checkbox);

// 注册其他内置组件

const app = new Vue({
  mpType: "app",
  ...App
});

app.$mount();
```

## 代码示例

#### 数据模型

models/wx/products.js

```js
import REST from "vue-mobile/utils/rest";
import auth from "vue-mobile/utils/auth";
import consts from "@/utils/consts";

export default class extends REST {
  constructor() {
    super();

    this.baseURL = consts.ApiUrl;
    this.headers = auth.getHeaders();
    this.path = "wx/products";
  }
}
```

#### 页面

pages/home/index.vue

```vue
<template>
  <div class="p-home">
    home
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
```

pages/home/script.js

```js
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
```

pages/home/style.scss

```scss
@import "~@/assets/styles/utils/index";

@include p(home) {
  // ...
}
```

#### 组件

同页面。

#### Vuex 状态管理

store/modules/wx/products.js

```js
import createStore from "vue-mobile/utils/create-store";
import Model from "@/apis/wx/products";

export default createStore({ Model });
```

## 贴士

#### 忽略目录

忽略目录，便于查找源码。选中目录 -> 右键 -> Mark Directory as -> Excluded；

#### 代码格式化

- 当前文件格式化。快捷键：Ctrl + Alt + Shift + P；
- 目录下所有文件格式化。选中目录 -> 右键 -> Optimize Imports；选中目录 -> 右键 -> Reformat with Prettier；

#### 识别项目别名

- 复制 `alias.config.js` 文件到项目根目录下；
- WebStorm -> File -> Settings -> Languages & Frameworks -> JavaScript -> Webpack -> webpack configuration file 选择 alias.config.js；

#### 使用 iconfont

- 在 iconfont 相应图标项目，点击 `下方新 icon 来袭，点击更新代码，更新后将支持 WOFF2 格式`；
- 复制代码到 `/assets/styles/global/components/iconfont.scss`，`.c-iconfont` 去掉样式 `font-size: 16px;`，添加样式 `display: inline-block;`；

## 链接

- [Uni App 官网](https://uniapp.dcloud.io/)
- [HBuilderX 下载](https://www.dcloud.io/hbuilderx.html)
- [uni-app跨平台框架官方教程](https://ke.qq.com/course/343370)
- [uni-app 中使用微信小程序第三方 SDK 及资源汇总](https://ask.dcloud.net.cn/article/35070)
- [uni-app中如何使用5+的原生界面控件（包括map、video、livepusher、barcode、nview）
](https://ask.dcloud.net.cn/article/35036)
- [uni-app 入坑指南](https://www.jianshu.com/p/7b33ade6d10b)
- [为什么有些组件名不可以使用](http://mpvue.com/qa/#_3)；
- [unionId 和 openId 的区别](https://mp.weixin.qq.com/s?__biz=NzA3OTQ2OTgw&mid=204189507&idx=1&sn=58fd3df3a8323f6b7bfb2680f222c293)
