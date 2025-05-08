document.addEventListener("DOMContentLoaded", () => {
  // === Slideshow for Home Page Images ===
  const slideshows = document.querySelectorAll(".slideshow");
  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll("img");
    let index = 0;

    if (images.length > 1) {
      images[index].classList.add("active");

      setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 3000);
    }
  });

  // === Modal Image Viewer Setup ===
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (modal && modalImg) {
    const clickableImages = document.querySelectorAll("img:not(.logo):not(.modal img):not(.no-modal)");

    clickableImages.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });

    // Close modal if clicking outside the image
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});

// === Modal Functions for HTML use ===
function closeImageModal() {
  const modal = document.getElementById("imageModal");
  if (modal) modal.style.display = "none";
}

function openTerms() {
  const modal = document.getElementById("termsModal");
  if (modal) modal.style.display = "flex";
}

function closeTerms() {
  const modal = document.getElementById("termsModal");
  if (modal) modal.style.display = "none";
}
