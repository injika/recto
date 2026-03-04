// Select all cards
const cards = document.querySelectorAll(".box");

// Flip card on click
cards.forEach(card => {
  card.addEventListener("click", function() {
    card.classList.toggle("active");
  });
});

// Reset button
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function() {
  cards.forEach(card => {
    card.classList.remove("active");
  });
});