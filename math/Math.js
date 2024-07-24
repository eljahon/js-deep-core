class myMath {
  max(...arg) {
          arg = arg.map(Number);
    let max = arg[0];
    for (let i = 0; i < arg.length; i++) {
      if (arg[i] > max) {
        max = arg[i];
      }
    }
    return max;
  }
  min(...arg) {

      arg = arg.map(Number);

          let min = arg[0];

          for (let i = 0; i < arg.length; i++) {

            if (arg[i] < min) {

              min = arg[i];

            }
          }
          
    return min;
  };
  round(n) {
  	if (n < 0.0) {
      var rest = (n % 1.0);
      if(rest < -0.5) {
        rest += 1.0;
      }
    return n - rest;
  } else {
    n += 0.5;
    return n - (n % 1.0);
  }
  }
  floor (n) {
    return~~n-(~~n>n)
  }
  ceil (n) {
    return~~n+(~~n<n)
  }
  trunc(n) {
    return~~n-(~~n>n)
  }
  sign (n) {
    if (n === 0) {
      return n;
  }

  return (n < 0) ? -1 : 1;
  }
  pow(base, power){
    // your code here
    if(power ==0) return 1;
    
    if(power == 1) return base;
  
    if(power === -1) return 1/base * pow(base, (Math.abs(power)-1)*-1);
  
    if(power % 2 ==0 ) {
      
      let res = pow(base, power/2);
      
      return res * res;
    }
  
    return base * pow(base, power-1)
  }
  sqrt (n) {
    let z= 1.0
  for (let i= 1; i <= 10; i++) {
    z-= (z*z - n) / (2*z)

  }
  return z
  }
  abs (n) {
    return n > 0 ? n : n*-1
  }
};
const math = new myMath();
console.log(math.max(1,2,3,4));
console.log(math.min(1,2,3,4));
console.log(math.round(14.755));
console.log(math.floor(13.755));
console.log(math.ceil(5.1));
console.log(math.sign(0));
console.log(math.sign(0));
console.log(math.abs(-2));
console.log(math.sqrt(2));