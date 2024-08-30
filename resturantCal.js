const price = 1200;
const age = 60;

if (age <= 12) {
  console.log("You can eat for free.");
} else if (age >= 60) {
  // 30% discount......
  const discount = (price * 30) / 100;
  const payment = price - discount;
  console.log("Your discount amount: " + discount);
  console.log("Your total payment: " + payment);
}
