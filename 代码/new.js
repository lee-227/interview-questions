function my_new(father, ...args) {
  let obj = Object.create(father.prototype)
  let res = father.call(obj, ...args)
  if ((typeof res === 'object' || typeof res === 'function') && res !== null)
    // 当构造函数自身返回了一个对象或者函数时，那么 new 时就返回该对象或函数
    return res
  return obj
}
