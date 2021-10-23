function myInstance(left, right) {
  if (typeof right !== 'object' || right === null) return false
  if (typeof left !== 'object' || left === null) return false
  let leftProto = left.__proto__
  let rightProto = right.prototype
  while (leftProto) {
    if (leftProto === rightProto) {
      return true
    }
    leftProto = leftProto.__proto__
  }
  return false
}
