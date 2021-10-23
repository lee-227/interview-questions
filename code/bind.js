Function.prototype.bind =
  Function.prototype.bind ||
  function (context) {
    if (typeof this !== 'function') throw new Error('must be function called')
    let self = this
    let args = Array.prototype.slice.call(arguments, 1)
    let NewFn = function () {}
    let fn = function () {
      let bindArgs = Array.prototype.slice.call(arguments)
      return self.apply(
        this instanceof F ? this : context,
        bindArgs.concat(args),
      )
    }
    NewFn.prototype = this.prototype
    fn.prototype = new NewFn()
    return fn
  }
