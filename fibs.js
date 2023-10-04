function fibs(n) {
  let result = [0, 1];
  if (n == 1) return [0];
  if (n == 2) return result;
  let a = 0;
  let b = 1;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
    result.push(b);
  }
  return result;
}

console.log(fibs(Math.floor(Math.random() * 10)));
