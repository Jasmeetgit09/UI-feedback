const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", handleRating);
  ratingEl.addEventListener("touchstart", handleRating);
});

btnEl.addEventListener("click", handleSubmit);

function handleRating(event) {
  removeActive();
  selectedRating =
    event.target.innerText || event.target.parentNode.innerText;
  event.target.classList.add("active");
  event.target.parentNode.classList.add("active");
}

function handleSubmit() {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
      <strong>Thank you</strong>
      <br>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>Thank you for your feedback we will use this to improve our customer experience</p>
    `;
  }
}

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
