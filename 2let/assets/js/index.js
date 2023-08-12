let x = [1, 2, 3, 4, 5, 6];
let y = [7, 8, 9, 10, 11, 6];

let diff = x.filter(function(x) {
  return y.indexOf(x) > 0;
});

console.log("ortaq eded budur"+" "+diff)