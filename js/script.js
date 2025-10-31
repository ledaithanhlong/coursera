document.addEventListener("DOMContentLoaded", () => {
  console.log("Jurni website loaded successfully!");

  const previewBox = document.getElementById("previewBox");
  const tourImages = document.querySelectorAll("#gallery img");

  tourImages.forEach((img, index) => {
    img.setAttribute("tabindex", index + 1);
  });

  window.addEventListener("load", () => {
    console.log("Page fully loaded. Tabindex attributes applied.");
  });

  tourImages.forEach((img) => {
    // Mouse hover
    img.addEventListener("mouseenter", () => {
      previewBox.style.backgroundImage = `url(${img.src})`;
      previewBox.textContent = img.alt;
    });

    img.addEventListener("mouseleave", () => {
      previewBox.style.backgroundImage = "";
      previewBox.textContent = "Hover over an image to preview!";
    });

    img.addEventListener("focus", () => {
      img.style.outline = "3px solid #0096c7";
      previewBox.style.backgroundImage = `url(${img.src})`;
      previewBox.textContent = img.alt;
    });

    img.addEventListener("blur", () => {
      img.style.outline = "none";
      previewBox.style.backgroundImage = "";
      previewBox.textContent = "Use Tab to navigate the images!";
    });
  });
});
