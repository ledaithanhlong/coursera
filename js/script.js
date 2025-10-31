function upDate(previewPic) {
  console.log("Mouse over triggered");
  console.log("Image src:", previewPic.src);
  console.log("Alt text:", previewPic.alt);

  // Lấy phần tử hiển thị lớn
  const display = document.getElementById("image");

  // Cập nhật ảnh nền và text
  display.style.backgroundImage = `url('${previewPic.src}')`;
  display.innerHTML = previewPic.alt;
}

function undo() {
  console.log("Mouse out triggered");

  const display = document.getElementById("image");

  // Trả về trạng thái ban đầu
  display.style.backgroundImage = "url('')";
  display.innerHTML = "Hover over an image below to display here.";
}
