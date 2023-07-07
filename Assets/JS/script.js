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
        "Sink your teeth into the delicate and succulent pockets of goodness, bursting with savory fillings like seasoned meats, vegetables, and aromatic spices. Each bite is a taste sensation that will transport you to the bustling streets of Nepal, Tibet, and beyond.",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/biryani.png",
      "restaurant name": "WOW BIRYANI",
      "restaurant info":
        "With Yum Yum, Experience the perfect balance of spices, the tenderness of the meat, and the fragrant aroma that fills the air. Each grain of basmati rice is infused with flavors that dance on your palate, taking you on a gastronomic journey to the heart of the biryani's origin.",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/pizza.png",
      "restaurant name": "WOW PIZZA",
      "restaurant info":
        "Yum Yum brings together the finest pizzerias in town, ensuring that you experience the authentic flavors and craftsmanship that make pizza an all-time favoriteWhether you're a fan of thin and crispy, deep-dish, or gluten-free crusts. Bestest Pizza in the town.",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/pasta.jpg",
      "restaurant name": "WOW PASTA",
      "restaurant info":
        "Whether you prefer creamy Alfredo, tangy marinara, or hearty Bolognese, Yum Yum offers an extensive selection of pasta dishes to suit every palate. Customize your pasta with a range of toppings, including succulent meats, vibrant vegetables, and aromatic herbs.",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/fish.png",
      "restaurant name": "WOW BENGALI",
      "restaurant info":
        "Bengali cuisine is renowned for its rich flavors, vibrant colors, and diverse range of dishes. Rooted in the fertile land of Bengal, which spans across Bangladesh and the Indian state of West Bengal, Bengali food showcases a harmonious blend of spices, fresh ingredients, and distinct cooking techniques.",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/north-indian..png",
      "restaurant name": "WOW NORTH INDIAN",
      "restaurant info":
        "North Indian cuisine is a tapestry of diverse flavors, aromatic spices, and rich culinary traditions. With its roots in the fertile plains of the Indo-Gangetic region, North Indian food offers a delightful array of dishes that captivate the senses and leave a lasting impression. Tandoori chicken, marinated in yogurt and spices.",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/south-indian.png",
      "restaurant name": "WOW SOUTH INDIAN",
      "restaurant info":
        "South Indian cuisine is a delectable journey that tantalizes taste buds with its vibrant flavors and diverse range of dishes. Known for its generous use of spices and aromatic ingredients, South Indian food is a delightful combination of traditional recipes and regional specialties. One of the staples of South Indian cuisine is dosa, a thin.",
      button: "Restaurant Page",
    },
  },
  {
    restaurant: {
      img: "Assets/Image/Restaurant-banner/chaat.png",
      "restaurant name": "WOW CHAAT",
      "restaurant info":
        "Whether you prefer creamy Alfredo, tangy marinara, or hearty Bolognese, Yum Yum offers an extensive selection of pasta dishes to suit every palate. Customize your pasta with a range of toppings, including succulent meats, vibrant vegetables, and aromatic herbs.The essence of chaat lies in its vibrant assortment of ingredients.",
      button: "Restaurant Page",
    },
  },
];

// Get the container element for the restaurants
const restaurants = [
  {
    img: "",
    "restaurant name": "WOW MOMO",
    food: "Chicken Momo",
    category: "Chaat",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW BIRIYANI",
    food: "Chicken Biryani",
    category: "North India",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW PIZZA",
    food: "Chicken Pizza",
    category: "South India",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW PASTA",
    food: "Red Sauce Pasta",
    category: "Italian",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW MOMO",
    food: "Chicken Momo",
    category: "Chinese",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW BIRIYANI",
    food: "Chicken Biryani",
    category: "Mughlai",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW PIZZA",
    food: "Chicken Pizza",
    category: "Italian",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW PASTA",
    food: "Chicken Pasta",
    category: "Bengali",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW MOMO",
    food: "Chicken Momo",
    category: "Chinese",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW BIRIYANI",
    food: "Chicken Biryani",
    category: "Mughlai",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW PIZZA",
    food: "Chicken Pizza",
    category: "Italian",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "",
    "restaurant name": "WOW PASTA",
    food: "Chicken Pasta",
    category: "Italian",
    button: "Add to Cart",
    tags: "",
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

// Get the container element for the restaurants
const search = document.getElementById("searchbutton");

search.addEventListener("click", function foodsearch(e) {
  e.preventDefault();
  const searchInput = document.getElementById("searchInput").value;
  if (searchInput) {
    localStorage.setItem("searchInput", searchInput);
    window.location.href = "Assets/HTML/food-item.html";

    const container = document.getElementById("restaurantContainer");
    container.innerHTML = "";
    restaurants.forEach(function (restaurant) {
      if (restaurant.food === `${searchInput}`) {
        const div = document.createElement("div");
        div.classList.add("restaurant");

        const img = document.createElement("img");
        img.src = restaurant.img;

        const h3 = document.createElement("h3");
        h3.textContent = restaurant["restaurant name"];

        const p1 = document.createElement("p");
        p1.textContent = " " + restaurant.food;

        const p2 = document.createElement("p");
        p2.textContent = " " + restaurant.category;

        const button = document.createElement("button");
        button.classList.add("button-add-to-cart");
        button.textContent = restaurant.button;

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(button);

        container.appendChild(div);
      }
    });
  }
});
