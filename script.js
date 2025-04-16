// Show login popup on load
window.onload = function () {
  document.getElementById("loginPopup").style.display = "flex";
};

// Close popup when user agrees
document.getElementById("agreeBtn").addEventListener("click", function () {
  document.getElementById("loginPopup").style.display = "none";
});

// Show alert when Buy Now is clicked
document.querySelectorAll("button").forEach(button => {
  if (button.textContent === "Buy Now") {
    button.addEventListener("click", () => {
      alert("Thanks for shopping with Tariqees!");
    });
  }
});
