function curry(fn, ...args) {
  if (fn.length <= args.length) {
    return fn(...args)
  } else {
    return function (...bindArgs) {
      return curry(fn, ...args.concat(bindArgs))
    }
  }
}
const add = curry(
  (a, b, c, d, e) => {
    return a + b + c + d + e
  },
  1,
  2,
  3,
  4,
)
console.log(add(5))
