// Virtual Dom Diff 

// 1. state 需要有数据
// 2. jsx 模板
// 3. 数据和模板结合，生成Virtual Dom(virtual Dom 就是一个js对象，用它来描述真实的dom) 
// 4. 根据生成的Virtual Dom 生成真实的dom，插入文档。
// 5. 数据发生改变，让数据和模板重新结合，生成新的Virtual Dom
// 6. 比较两个Virtual Dom的区别，找出差异 (依据diff算法)
// 7. 根据virtual dom 中的差异，直接修改真实dom

// 按照dom层级来比对，出现不同直接替换，不再向下一层级查找
// setState 在底层是有优化的，类似于前端方向大家耳熟能详的节流， 会把多次setState合并为一次setState
// key 值尽量不要用index，尤其是在你循环出来的元素会有添加或者删除操作的场景下， 因为此时使用index作为key值，出现添加或删除的操作后会导致key值不一样， 影响比对性能
