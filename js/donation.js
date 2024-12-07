document
  .getElementById("donation-btn-1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueById("donation-input-1");
    const donationBalance = getTextFieldValueById("donation-balance-1");
    const mainBalance = getTextFieldValueById("main-balance");

    if (isNaN(inputValue)) {
      alert("Invalid donation amount!");
      return;
    }

    if (inputValue <= 0) {
      alert("Invalid donation amount!!");
      return;
    }

    if (inputValue > mainBalance) {
      alert("Invalid donation amount!!!");
      return;
    }

    // new balance
    const newBalance = inputValue + donationBalance;
    document.getElementById("donation-balance-1").innerText = newBalance;

    // main balance
    const newMainBalance = mainBalance - inputValue;
    document.getElementById("main-balance").innerText = newMainBalance;
  });

document
  .getElementById("donation-btn-2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueById("donation-input-2");
    const donationBalance = getTextFieldValueById("donation-balance-2");
    const mainBalance = getTextFieldValueById("main-balance");

    if (isNaN(inputValue)) {
      alert("Invalid donation amount!");
      return;
    }

    if (inputValue <= 0) {
      alert("Invalid donation amount!!");
      return;
    }

    if (inputValue > mainBalance) {
      alert("Invalid donation amount!!!");
      return;
    }

    // new balance
    const newBalance = inputValue + donationBalance;
    document.getElementById("donation-balance-2").innerText = newBalance;

    // main balance
    const newMainBalance = mainBalance - inputValue;
    document.getElementById("main-balance").innerText = newMainBalance;
  });

document
  .getElementById("donation-btn-3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueById("donation-input-3");
    const donationBalance = getTextFieldValueById("donation-balance-3");
    const mainBalance = getTextFieldValueById("main-balance");

    if (isNaN(inputValue)) {
      alert("Invalid donation amount!");
      return;
    }

    if (inputValue <= 0) {
      alert("Invalid donation amount!!");
      return;
    }

    if (inputValue > mainBalance) {
      alert("Invalid donation amount!!!");
      return;
    }

    // new balance
    const newBalance = inputValue + donationBalance;
    document.getElementById("donation-balance-3").innerText = newBalance;

    // main balance
    const newMainBalance = mainBalance - inputValue;
    document.getElementById("main-balance").innerText = newMainBalance;
  });
