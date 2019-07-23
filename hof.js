function addX(x) {
  return function(a) {
    return x + a
  }
}

const add3 = addX(3)
console.log(add3(6))

