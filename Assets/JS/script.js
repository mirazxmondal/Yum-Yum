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

// Find Nearby Cuisines Section
const restaurantsData = [
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/momo.png",
      "restaurant name": "WOW MOMO",
      "restaurant info":
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/biryani.png",
      "restaurant name": "WOW BIRYANI",
      "restaurant info":
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/pizza.png",
      "restaurant name": "WOW PIZZA",
      "restaurant info":
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/pasta.jpg",
      "restaurant name": "WOW PASTA",
      "restaurant info":
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      button: "Restaurant Page",
    },
  },
];

// Get the container element for the restaurants
const container = document.querySelector("#restaurant-container");

// Loop through the restaurants data and create HTML elements for each restaurant
restaurantsData.forEach((restaurant) => {
  // Create a card element for the restaurant
  const card = document.createElement("div");
  card.classList.add("restaurant-card");

  // Create an image element for the restaurant
  const img = document.createElement("img");
  img.classList.add("restaurant-img");
  img.src = restaurant.restaurant.img;

  // Create a name element for the restaurant
  const name = document.createElement("h2");
  name.classList.add("restaurant-name");
  name.textContent = restaurant.restaurant["restaurant name"];

  // Create an info element for the restaurant
  const info = document.createElement("p");
  info.classList.add("restaurant-info");
  info.textContent = restaurant.restaurant["restaurant info"];

  // Create a button element for the restaurant
  const button = document.createElement("button");
  button.classList.add("restaurant-button");
  button.textContent = restaurant.restaurant.button;

  // Add an event listener to the button element
  button.addEventListener("click", () => {
    // Set the URL of the destination HTML page
    window.location.href = "Assets/HTML/restaurant.html";
  });

  // Append the elements to the card element
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(info);
  card.appendChild(button);

  // Append the card element to the container
  container.appendChild(card);
});
