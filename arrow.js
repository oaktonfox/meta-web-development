function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

console.log(foo(3)); // 3 + 3 = 6

function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

console.log(foo(1) ); // 11