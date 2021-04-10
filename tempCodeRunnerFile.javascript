function getSumOfDigits(n) {
  let str = String(n);

  while (str.length > 1) {
    const arr = str.split('');
    str = arr.reduce((a, b) => a + b);
  }
  return Number(str);
}

console.log(getSumOfDigits(91))