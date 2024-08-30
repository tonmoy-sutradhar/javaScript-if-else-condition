const price = 1200;
const age = 43;

if (age <= 12) {
  console.log("You can eat for free.");
} else if (age >= 60) {
  // 30% discount......
  const discount = (price * 30) / 100;
  const payment = price - discount;
  console.log("Your discount amount: " + discount);
  console.log("Your total payment: " + payment);
} else if (age >= 50) {
  // 30% discount......
  const discount = (price * 20) / 100;
  const payment = price - discount;
  console.log("Your discount amount: " + discount);
  console.log("Your total payment: " + payment);
} else if (age >= 40) {
  // 30% discount......
  const discount = (price * 10) / 100;
  const payment = price - discount;
  console.log("Your discount amount: " + discount);
  console.log("Your total payment: " + payment);
} else {
  console.log("Total payment: " + price);
}
