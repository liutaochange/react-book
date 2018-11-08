// Virtual Dom Diff 

// 1. state 需要有数据
// 2. jsx 模板
// 3. 数据和模板结合，生成Virtual Dom(virtual Dom 就是一个js对象，用它来描述真实的dom) 
// 4. 根据生成的Virtual Dom 生成真实的dom，插入文档。
// 5. 数据发生改变，让数据和模板重新结合，生成新的Virtual Dom
// 6. 比较两个Virtual Dom的区别，找出差异 (依据diff算法)
// 7. 根据virtual dom 中的差异，直接修改真实dom
