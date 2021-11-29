## vue-mount-window

将 vue 组件挂载到 window，可直接从 window 上读取当前组件属性

用途:

1. webapp，app 端可以直接调用组件方法，无需前端封装 app 调用方法
2. 控制台调试
   ...

### use

main.js

```js
import MountWindow from 'vue-mount-window'
// ...
app.use(MountWindow)
```

### config

可单独配置规则的名称

```js
app.use(MountWindow, {
  mountName: 'yourwantuse' // default MountWindow
})
```
