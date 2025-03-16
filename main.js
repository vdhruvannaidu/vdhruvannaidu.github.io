
  function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent the default anchor behavior
  
    // Remove the 'active' Tailwind classes from all nav items
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove(
        "border-gray-800",
        "text-gray-800",
        "dark:border-neutral-200",
        "dark:text-neutral-200"
      );
      item.classList.add(
        "text-gray-500",
        "dark:text-neutral-400",
        "border-transparent"
      ); // Reset to inactive state
    });
  
    // Add the full set of Tailwind 'active' classes to the clicked nav item
    event.currentTarget.classList.add(
      "border-gray-800",
      "text-gray-800",
      "dark:border-neutral-200",
      "dark:text-neutral-200"
    );
  
    // Scroll to the section if sectionId is provided
    if (sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  
  // Get the target section by ID
  const section = document.getElementById(sectionId);
  const offset = 100; // Adjust this value to your desired offset

  // Scroll to the section with smooth behavior
  window.scrollTo({
    top: section.offsetTop - offset,
    behavior: "smooth",
  });
}

 // Initialize Home as active by default on page load
 document.addEventListener("DOMContentLoaded", function () {
  const homeNav = document.querySelector('[data-section="home"]');
  if (homeNav) {
    homeNav.classList.add(
      "border-gray-800",
      "text-gray-800",
      "dark:border-neutral-200",
      "dark:text-neutral-200"
    );
  }
});
const html = document.querySelector("html");
const isLightOrAuto =
  localStorage.getItem("hs_theme") === "light" ||
  (localStorage.getItem("hs_theme") === "auto" &&
    !window.matchMedia("(prefers-color-scheme: dark)").matches);
const isDarkOrAuto =
  localStorage.getItem("hs_theme") === "dark" ||
  (localStorage.getItem("hs_theme") === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

if (isLightOrAuto && html.classList.contains("dark"))
  html.classList.remove("dark");
else if (isDarkOrAuto && html.classList.contains("light"))
  html.classList.remove("light");
else if (isDarkOrAuto && !html.classList.contains("dark"))
  html.classList.add("dark");
else if (isLightOrAuto && !html.classList.contains("light"))
  html.classList.add("light");

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  centeredSlides: true,
  effect: "slide",
  followFinger: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },

});

// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircle.style.setProperty("--progress", 1 - progress);
//       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//     },
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: true,
//   },
// });
