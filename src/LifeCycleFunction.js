// 生命周期函数： 会在某一时刻自动调用执行的函数 例如render函数 在state和props里边有数据改动时会自动执行

// 初始化阶段

// initialization 初始化 例如construct里边初始定义state和props, 只在组件初始化的时候执行一次

// getDefaultProps()  设置默认的props，也可以用dufaultProps设置组件的默认属性.

// getInitialState()  在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props

// 挂载阶段

// mount 只在组件挂载阶段执行一次

// componentWillMount() 只在组件初始化时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。此时，render函数还未执行

// render()  react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时不能更改state了，但是当state有新的修改，render还会重新执行。

// componentDidMount()  组件挂载之后调用，只调用一次，以后组件有更新，不会再调用。

// 数据有更新阶段

// shouldComponentUpdate(nextProps, nextState) 

/**
 * react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，
 * 如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
 * 节省大量性能，尤其是在dom结构复杂的时候
 */

 // componentWillUpdate(nextProps, nextState)

 /**
   * 组件更新之前调用，晚于shouldComponentUpdate执行，但是早于render执行
   * 如果shouldComponentUpdate返回true他就开始执行
   * 如果shouldComponentUpdate返回false他就不会被执行
   */

 // componentDidUpdate() 组件更新完成之后执行 

 // componentWillReceiveProps() 子组件接收到父组件新的props,在父组件重新调用render函数结束后执行

 // 卸载阶段

 // componentWillUnmount()  组件将要卸载时调用，一些事件监听和定时器需要在此时清除。