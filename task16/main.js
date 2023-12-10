let a = +prompt("1-son kiriting");
let b = +prompt("2-son kiriting");
if (a > 9 && b > 9) {
  if (a < 100 && b < 100) {
    if (a % 2 == 0 && b % 2 == 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
} else {
  console.log(false);
}
