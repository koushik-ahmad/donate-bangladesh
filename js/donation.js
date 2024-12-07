document
  .getElementById("donation-btn-1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueById("donation-input-1");
    const donationBalance = getTextFieldValueById("donation-balance-1");
    const mainBalance = getTextFieldValueById("main-balance");

    const donationTitle = document.getElementById("donation-title-1").innerText;

    const currentDate = new Date();

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

    // donation history
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="border-2 rounded-lg p-5 mb-5">
         <h3 class="font-semibold text-xl pb-2">${inputValue} Taka is ${donationTitle}</h3>
         <p>Date : ${currentDate}</p>
       </div>
    `;

    document.getElementById("donation-history").appendChild(div);

    alert("donation successfully!!!");
  });

document
  .getElementById("donation-btn-2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueById("donation-input-2");
    const donationBalance = getTextFieldValueById("donation-balance-2");
    const mainBalance = getTextFieldValueById("main-balance");

    const donationTitle = document.getElementById("donation-title-2").innerText;

    const currentDate = new Date();

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

    // donation history
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="border-2 rounded-lg p-5 mb-5">
         <h3 class="font-semibold text-xl pb-2">${inputValue} Taka is ${donationTitle}</h3>
         <p>Date : ${currentDate}</p>
       </div>
    `;

    document.getElementById("donation-history").appendChild(div);

    alert("donation successfully!!!");
  });

document
  .getElementById("donation-btn-3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueById("donation-input-3");
    const donationBalance = getTextFieldValueById("donation-balance-3");
    const mainBalance = getTextFieldValueById("main-balance");

    const donationTitle = document.getElementById("donation-title-3").innerText;

    const currentDate = new Date();

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

    // donation history
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="border-2 rounded-lg p-5 mb-5">
         <h3 class="font-semibold text-xl pb-2">${inputValue} Taka is ${donationTitle}</h3>
         <p>Date : ${currentDate}</p>
       </div>
    `;

    document.getElementById("donation-history").appendChild(div);

    alert("donation successfully!!!");
  });
