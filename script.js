let slides = document.querySelectorAll(".slide");
let index = 0;
let interval = setInterval(nextSlide, 4000);

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}
function scrollGallery(direction) {
  const scroller = document.getElementById('scroller');
  const scrollAmount = 320; // Width of card + gap
  
  if (direction === 1) {
    scroller.scrollLeft += scrollAmount;
  } else {
    scroller.scrollLeft -= scrollAmount;
  }
}
