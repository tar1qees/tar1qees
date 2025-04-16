// Show login popup on page load
window.onload = function () {
  const popup = document.getElementById("loginPopup");
  if (popup) {
    popup.style.display = "flex";
  }
};

// Close the popup when "I Agree" is clicked
document.addEventListener("DOMContentLoaded", function () {
  const agreeBtn = document.getElementById("agreeBtn");
  const popup = document.getElementById("loginPopup");

  if (agreeBtn && popup) {
    agreeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }

  // Optional: Add alert on buy buttons
  document.querySelectorAll("button").forEach(button => {
    if (button.textContent === "Buy Now") {
      button.addEventListener("click", () => {
        alert("Thanks for shopping with Tariqees!");
      });
    }
  });
});
