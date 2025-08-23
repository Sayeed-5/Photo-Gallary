// Filter Gallery
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".image-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    lightbox.style.display = "flex";
    lightboxImg.src = imgSrc;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

