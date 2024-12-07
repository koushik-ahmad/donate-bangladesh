document
  .getElementById("show-btn-donation")
  .addEventListener("click", function (event) {
    event.preventDefault();

    console.log("donation click");
    showSectionById("btn-donation");
  });

document
  .getElementById("show-btn-history")
  .addEventListener("click", function (event) {
    event.preventDefault();

    console.log("history click");
    showSectionById("btn-history");
  });
