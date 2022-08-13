let borders = document.querySelectorAll(".border");

for (let border of borders) {
  for (let i = 0; i < 900; i++) {
    let borderImage = document.createElement("img");
    borderImage.src = "IMG/hr-img.png";
    borders.alt = "border";
    border.appendChild(borderImage);
  }
}
