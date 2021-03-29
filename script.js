const buyNow = document.querySelectorAll(".buy-now");
const openCheckOut = document.querySelector(".checkout");
const checkOut = document.querySelector(".modal");
const closeCheckOut = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");
const total = document.querySelector(".total");
const payment = document.querySelector(".payment");
const change = document.querySelector(".change");
const submit = document.querySelector(".submit");
const printDisplay = document.querySelector(".print");

const totalPayment = [];
let paymentCash;
let paymentCost;
let displayChange;

// Check Out
openCheckOut.addEventListener("click", function (e) {
  e.preventDefault();
  checkOut.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeCheckOut.addEventListener("click", function () {
  total.value = "";
  payment.value = "";
  change.value = "";
  checkOut.classList.add("hidden");
  overlay.classList.add("hidden");
});

const calcPayment = (cost, pay) => Math.abs(cost - pay);

buyNow.forEach(function (buy) {
  buy.addEventListener("click", function () {
    totalPayment.push(+buy.getAttribute("value"));
    const paymentDisplay = totalPayment.reduce((acc, cur) => acc + cur, 0);
    paymentCost = paymentDisplay;
    total.value = paymentDisplay;
  });
});

submit.addEventListener("click", function (e) {
  paymentCash = +payment.value;
  if (!paymentCash && !paymentCost && !displayChange) alert("Go back!");
  else if (paymentCash > paymentCost) {
    change.value = calcPayment(paymentCost, paymentCash);
    displayChange = +change.value;
  } else alert("You don't have enough money!");
});

printDisplay.addEventListener("click", function (e) {
  if (calcPayment(paymentCost, paymentCash) && displayChange) print();
  else alert("You must pay first!");
});
