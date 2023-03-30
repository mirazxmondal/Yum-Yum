console.log("Landing-Page");

// FAQs Section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var parent = this.parentElement;
    var panel = this.nextElementSibling;
    var mainPanel = document.querySelector(".main-panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      parent.style.maxHeight =
        parseInt(parent.style.maxHeight) + panel.scrollHeight + "px";
    }
  });
}

const hamburger = document.querySelector(".hamburger-icon");
// const navLinks = document.querySelector(".nav-links");
const ulLinks = document.querySelector(".ul-list1");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("inactive");
  ulLinks.classList.remove("inactive");
});

// ulLinks.addEventListener("click", function () {
//   ulLinks.classList.toggle("inactive");
// });
