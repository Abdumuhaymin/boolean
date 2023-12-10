let a = +prompt("1-son kiriting");
let b = +prompt("2-son kiriting");
if ((a % 2 > 0 && b % 2 == 0) || (a % 2 == 0 && b % 2 > 0)) {
  console.log(true);
} else {
  console.log(false);
}
