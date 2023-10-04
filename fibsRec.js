function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let prevFibs = fibsRec(n - 1);
  return prevFibs.concat(
    prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]
  );
}

console.log(fibsRec(Math.floor(Math.random() * 10)));
