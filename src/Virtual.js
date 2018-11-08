// 当组件的props和state发生改变时，render函数就会重新执行

// 1. state 需要有数据
// 2. jsx 模板
// 3. 数据和模板结合，生成真实的dom，插入文档
// 4. 数据发生改变，让数据和模板重新结合，生成新的dom，替换原来的dom

// 缺陷
// 1. 第一次生成完整的dom
// 2. 第二次也生成完整的dom
// 3. 完整的dom替换，浪费性能

// 优化

// 1. state 需要有数据
// 2. jsx 模板
// 3. 数据和模板结合，生成真实的dom，插入文档
// 4. 数据发生改变，让数据和模板重新结合，生成新的dom
// 5. 新的dom (documentFreFragment) 与 原来的dom进行对比 寻找差异
// 6. 找出差异，替换差异部分的dom

// 缺陷
// 性能的提升并不明显

// Virtual Dom 

// 1. state 需要有数据
// 2. jsx 模板
// 3. 数据和模板结合，生成Virtual Dom(virtual Dom 就是一个js对象，用它来描述真实的dom) 
// 4. 根据生成的Virtual Dom 生成真实的dom，插入文档。
// 5. 数据发生改变，让数据和模板重新结合，生成新的Virtual Dom
// 6. 比较两个Virtual Dom的区别，找出差异
// 7. 根据virtual dom 中的差异，直接修改真实dom

// 性能提升： 
// 1. 生成一个js对象（Virtual Dom）的消耗比生成一个真实的dom少的多，因此性能极大地提升
// 2. js对象（Virtual Dom） 的对比比真实dom对象的对比也是提升了性能的