// Show login popup when page loads
window.onload = function() {
    const popup = document.getElementById("loginPopup");
    popup.style.display = "flex";
};

// Close popup on agreement
document.getElementById("agreeBtn").addEventListener("click", function () {
    document.getElementById("loginPopup").style.display = "none";
});

// Buy buttons alert
document.querySelectorAll('button').forEach(button => {
    if (button.textContent === 'Buy Now') {
        button.addEventListener('click', () => {
            alert('Thanks for shopping with Tariqees!');
        });
    }
});
