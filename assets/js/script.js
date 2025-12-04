// ====== MODAL BOOKING ======
function openBooking(tourName) {
  document.getElementById("bookingTourName").innerText = "Tour đã chọn: " + tourName;
  document.getElementById("bookingModal").style.display = 'block';
}


function closeBooking() {
  document.getElementById("bookingModal").style.display = 'none';
}


function submitBooking() {
  alert("Bạn đã đặt tour thành công!");
  closeBooking();
}


// ====== AUTO GALLERY ======
let galleryIndex = 0;
const slides = document.querySelectorAll(".gallery-slide");


function showGallery() {
  slides.forEach(slide => slide.classList.remove("show"));


  galleryIndex++;
  if (galleryIndex > slides.length) galleryIndex = 1;


  slides[galleryIndex - 1].classList.add("show");


  setTimeout(showGallery, 3000);
}


window.addEventListener("load", showGallery);




