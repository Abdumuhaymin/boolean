let a = +prompt("1-son kiriting");
let b = +prompt("2-son kiriting");
if (a > 99 && b > 99) {
  if (a < 1000 && b < 1000) {
    if (a % 2 > 0 && b % 2 > 0) {
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
