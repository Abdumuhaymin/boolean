let a = +prompt("1-son kiriting");
let b = +prompt("2-son kiriting");
let c = +prompt("3-son kiriting");
if ((a < b && b < c) || (a > b && b > c)) {
  console.log(true);
} else {
  console.log(false);
}
