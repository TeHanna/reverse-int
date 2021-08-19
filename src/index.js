module.exports = function reverse (n) {
  if (n > 0) {
    let revStr = '';
    for (let i = 1; i < n.toString().length; i++) {
      revStr += Math.floor((n/Math.pow(10, i)))%10;
    }
    return ((`${n%10}` + revStr)*1);
  } else {
    n = n * (-1);
    let revStr = '';
    for (let i = 1; i < n.toString().length; i++) {
      revStr += Math.floor((n/Math.pow(10, i)))%10;
    }
    return ((`${n%10}` + revStr)*1);
  }
}
