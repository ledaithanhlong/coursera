const gallery = document.querySelectorAll("#gallery img");
const previewBox = document.getElementById("previewBox");

gallery.forEach(img => {
  img.addEventListener("mouseenter", () => {
    previewBox.style.backgroundImage = `url(${img.src})`;
    previewBox.textContent = img.alt;
  });
  img.addEventListener("mouseleave", () => {
    previewBox.style.backgroundImage = "";
    previewBox.textContent = "Hover over an image to preview!";
  });
});
