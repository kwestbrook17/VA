// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});


var carouselImages = document.querySelectorAll(".carousel-image");
    var currentImageIndex = 0;

    function rotateImages() {
      // Hide all images
      for (var i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.display = "none";
      }

      // Display the current image
      carouselImages[currentImageIndex].style.display = "block";

      // Increment the current image index
      currentImageIndex++;

      // Reset the index if it exceeds the number of images
      if (currentImageIndex >= carouselImages.length) {
        currentImageIndex = 0;
      }
    }
    const carouselItems = document.querySelectorAll('.carousel-item');
const imageTexts = document.querySelectorAll('.image-text');

carouselItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        imageTexts[index].style.opacity = '1';
        imageTexts[index].style.visibility = 'visible';
    });
    item.addEventListener('mouseout', () => {
        imageTexts[index].style.opacity = '0';
        imageTexts[index].style.visibility = 'hidden';
    });
});

       // Call the rotateImages function every 3 seconds
    setInterval(rotateImages, 3000);