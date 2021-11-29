function MountWindow() {}
MountWindow.install = function (Vue, options) {
  const option = Object.assign(
    {
      mountName: 'MountWindow'
    },
    options
  )
  console.log(`----挂载成功，可使用${option.mountName}访问当前组件属性----`)
  Vue.mixin({
    created() {
      window[option.mountName] = this
    }
  })
}

export default MountWindow
