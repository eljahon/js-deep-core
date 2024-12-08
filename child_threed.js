 self.onmessage =function(event) {
    const num = event.data
    console.log('child_threed  get value', num, event, self);
    self.postMessage(summ(num))
    self.close()

 }

 function summ(n) {
   let summ = 0;
   for(let i=0; i<n; i++) {
     summ += i;
   }
   return summ;
 }