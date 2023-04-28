// FAQs Section
/* This code is adding event listeners to all elements with the class "accordion" and toggling the
class "active" on click. It then gets the parent element and the next sibling element of the clicked
element and sets the maximum height of the sibling element to its scroll height if it is not already
set, and null if it is already set. It also adjusts the maximum height of the parent element
accordingly. This code is used to create an accordion-style FAQ section where only one question can
be expanded at a time. */
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

// Hamburger 
function myFunction(x) {
  x.classList.toggle("change");
}
