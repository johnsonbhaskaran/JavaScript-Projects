const curry = function (fn, airty = fn.length) {
  return (
    function (prevArgs) {
      return function nextCurried(args) {
        let nextArgs = [...prevArgs];
        if (nextArgs <= airty) {
          return args;
        } else {
          return nextCurried(args);
        }
      };
    },
    []
  );
};

const totalIt = (n1, n2, n3, n4) => n1 + n2 + n3 + n4;

const multiply10 = (num, val) => num * val;

const curryFn = pipe(curry(totalIt)(1)(2)(3), curry(multiply10)(10));

console.log(curryFn());
