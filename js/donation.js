document
  .getElementById("donation-btn-1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const input1 = document.getElementById("donation-input-1").value;
    const input2 = document.getElementById("donation-balance-1").innerText;

    console.log(input1, input2, input3);
  });
