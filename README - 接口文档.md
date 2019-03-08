# vue 移动端项目实训文档

## 快速开始

- 1 开启数据接口服务器（进入bee_quick目录）：`node app.js`
- 2 开启脚手架（进入vuecli_lovebeen目录）：`npm start` 或者 `npm run dev`



## 项目功能点讲解

项目主要为两个页面：

- 1 列表页面

  - 1.1 左侧侧边栏菜单 - 展示（*）
  - 1.2 右侧商品列表项 - 展示（*）
  - 1.3 切换菜单展示不同商品列表（**）
  - 1.4 加入购物车

- 2 购物车页面

  - 2.1 渲染购物车页面数据

  > 注意：购物车页面的数据，都是根据获取到已选商品的id，进行展示的。



## API 文档

- 商品列表页面
  - 接口地址：`http://localhost:3008/list`
  - 使用说明：需要通过 JSONP 方式来*跨域*获取数据

- 购物车页面
  - 接口地址：`http://m.beequick.cn/data/home?_r=0.10487448529559651&cart_pids=ids&location=121.5721941391567%2C31.21168025925351`
  - 参数 *ids* 格式：`encodeURIComponent('2435,2436,10645')` URI编码
  - 使用说明：使用vue-cli脚手架配置**反向代理**的方式来跨域获取数据

```js
/* vue-cli 配置代理的配置参数： */

proxyTable: {
  // 代理规则
  '/api': {
    // 代理的目标服务器地址
    target: 'http://m.beequick.cn/data/',
    // https请求需要该设置
    secure: false,
    // 必须设置该项
    changeOrigin: true,
    // 将 '/api' 替换成 ''
    pathRewrite: { "^/api": "" }
  }
},
```



##  如何开始项目

- 1.利用vue-cli初始化一个项目 `vue init webpack itcast_vue `
- 2.在 `itcast_vue` 脚手架中的 `src` 目录中开始写代码
- 3.`App.vue` ===> 先搭建SPA的架子
- 4.`List.vue` ==> 列表页面
  - 通过 JSONP 获取数据（导入 tools/index.js ，那么就可用通过 this.$http.jsonp() 来发请求了）
- 5.`Cart.vue`==> 购物车页面页面



## 跨域的问题

- JSONP跨域
- 代理
  - 面试中的一个问题：vue中你是怎么实现跨域的？？？

```html
只要是通过 webpack 构建工具搭建的项目，都可以通过 webpack-dev-server 中配置反向代理来解决跨域的问题。
在 config/index.js 中配置 proxyTable，来实现代理的功能

proxyTable: {
	// /api 表示webpack-dev-server代理的接口地址（以 /api 开头）
'/api': {
	// 代理的目标服务器地址
target: 'http://m.beequick.cn/data/',
	// https请求需要该设置
secure: false,
	// 必须设置该项
changeOrigin: true,

	// 远程服务器的接口地址：http://m.beequick.cn/data/home
	// 本地访问的地址：/api/home
	// '/api/home' 路径重写为：'/home'
pathRewrite: { "^/api": "" }
}
}
```

