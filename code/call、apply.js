Function.prototype.newCall = function (context) {
  let obj = new Object(context) || window
  obj.fn = this // 设置
  let args = [...arguments].slice(1)
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype.newApply = function (context, arr) {
  var context = new Object(context) || window
  context.fn = this

  let result
  if (!arr) {
    result = context.fn()
  } else {
    result = context.fn(...arr)
  }
  delete context.fn
  return result
}
function test() {
  console.log(this)
}
test.call(true)
