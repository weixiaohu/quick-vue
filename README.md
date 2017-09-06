# quick-vue
> quick-vue是一个基于webpack的vue项目骨架

## 启动
```
- 安装依赖
npm install

- 开启开发服务器
npm run dev

- 生产环境构建
npm run build
```

## 基础功能

- 路由管理  
基于vue-router实现路由系统，利用组件懒加载解决打包过大。
- 状态管理  
基于vuex实现全局状态管理。  
> 注意：vuex并不是必须的，应用较为简单时可以采用。event-bus  
- 样式管理  
采用了sass作为预处理语言，布局基于rem（无需手动操作，按照正常写px即可，已利用postcss自动转换）。

## 组件化  
建议一个页面对应一个view，可以共用的组件进行封装放在components目录下。

## api  
api已单独抽离出来，易于管理。  
需要先在api层定义接口，在组件直接引用即可。接口返回值为promise。
```
import api from '@/api';

api.user.login({name, password}).then(() => {
    // do something...
})

```

## mock
开发过程中可以先写mock接口，注意要和api层的接口对应
```
- 启动mock服务
npm run mock
```


