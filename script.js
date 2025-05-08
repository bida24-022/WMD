document.addEventListener("DOMContentLoaded", () => {
  // === Slideshow Delay Until Loaded ===
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll("img");
    let index = 0;
    let loadedImages = 0;

    images.forEach(img => {
      img.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          images[index].classList.add("active");
          setInterval(() => {
            images[index].classList.remove("active");
            index = (index + 1) % images.length;
            images[index].classList.add("active");
          }, 3000);
        }
      };

      // Force trigger if already cached
      if (img.complete) img.onload();
    });
  });

  // === Modal Setup ===
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (modal && modalImg) {
    const images = document.querySelectorAll("img:not(.logo):not(.modal img):not(.no-modal)");

    images.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
});

// === HTML-triggered Modals ===
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
