function digitize(y) {
  let str = String(y);
  console.log(str)
  return str.split('').map(Number).reverse()
}
