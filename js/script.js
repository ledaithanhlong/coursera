// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  // Set active nav link based on current filename
  try {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf("/") + 1) || "index.html";
    const anchors = document.querySelectorAll("nav a");
    anchors.forEach(a => {
      const href = a.getAttribute("href");
      if (href === file) a.classList.add("active");
    });
  } catch (e) {
    // silent
  }

  // Make figures keyboard-focusable for accessibility
  const figures = document.querySelectorAll(".gallery figure");
  figures.forEach((fig, idx) => {
    fig.setAttribute("tabindex", "0"); // allow focus
    fig.addEventListener("focus", () => {
      fig.classList.add("focused");
    });
    fig.addEventListener("blur", () => {
      fig.classList.remove("focused");
    });
    // Optional: pressing Enter opens image in new tab (useful for keyboard users)
    fig.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        const img = fig.querySelector("img");
        if (img && img.src) {
          window.open(img.src, "_blank");
        }
      }
    });
  });
});
