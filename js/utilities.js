function showSectionById(id) {
  // hide section
  document.getElementById("btn-donation").classList.add("hidden");
  document.getElementById("btn-history").classList.add("hidden");

  // show section
  document.getElementById(id).classList.remove("hidden");
}


