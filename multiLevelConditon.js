const price = 5100;

if (price >= 5000) {
  //10% discount-----
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log("Your 10% discount amount: " + discount);
  console.log("After discount amount: " + payAmount);
} else if (price >= 2500) {
  // 5% discount------
  const discount = (price * 5) / 100;
  const payment = price - discount;
  console.log("Your 5% discount amount: " + discount);
  console.log("After discount amount: " + payment);
} else {
  console.log(price);
}
