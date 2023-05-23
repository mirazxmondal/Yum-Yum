/* This code is creating a list of restaurants with their respective food items, categories, and a
button to add them to a cart. It is using JavaScript to dynamically create HTML elements for each
restaurant and add them to the DOM. The `restaurants` array contains objects with information about
each restaurant, and the `forEach` loop is iterating over each object to create a new `div` element
for each restaurant. Inside each `div`, the code is creating and appending `img`, `h3`, `p1`, `p2`,
and `button` elements with the relevant information from the `restaurants` array. Finally, the `div`
element is appended to the `container` element in the HTML. */
const restaurants = [
  {
    img: "./Food-items/bhel-puri.png",
    "restaurant name": "WOW CHAAT",
    food: "Bhel puri",
    category: "Chaat",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/paneer-butter-masala.png",
    "restaurant name": "WOW BIRIYANI",
    food: "Paneer Butter Masala",
    category: "North India",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/idli.png",
    "restaurant name": "WOW South",
    food: "Idli",
    category: "South India",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/red-sauce-pasta.png",
    "restaurant name": "WOW PASTA",
    food: "Red Sauce Pasta",
    category: "Italian",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/momo.png",
    "restaurant name": "WOW MOMO",
    food: "Chicken Momo",
    category: "Chinese",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/bengali-biryani.png",
    "restaurant name": "WOW BIRIYANI",
    food: "Bengali Chicken Biryani",
    category: "Bengali",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/chicken-barbecue-pizza.jpg",
    "restaurant name": "WOW PIZZA",
    food: "Chicken Barbecue Pizza",
    category: "Italian",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/bhetki-macher-paturi.png",
    "restaurant name": "WOW BENGALI",
    food: "Bhetki Macher Paturi",
    category: "Bengali",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/chicken-noodles.png",
    "restaurant name": "WOW MOMO",
    food: "Chicken Noodles",
    category: "Chinese",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/hyderabadi-biryani.jpg",
    "restaurant name": "WOW BIRIYANI",
    food: "Hyderabadi Chicken Biryani",
    category: "Mughlai",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/gelato.png",
    "restaurant name": "WOW PIZZA",
    food: "Gelato",
    category: "Italian",
    button: "Add to Cart",
    tags: "",
  },
  {
    img: "./Food-items/pasta.png",
    "restaurant name": "WOW PASTA",
    food: "Chicken Pasta",
    category: "Italian",
    button: "Add to Cart",
    tags: "",
  },
];


/* This code is creating a list of restaurants with their respective food items, categories, and a
button to add them to a cart. It is using JavaScript to dynamically create HTML elements for each
restaurant and add them to the DOM. The `restaurants` array contains objects with information about
each restaurant, and the `forEach` loop is iterating over each object to create a new `div` element
for each restaurant. Inside each `div`, the code is creating and appending `img`, `h3`, `p1`, `p2`,
and `button` elements with the relevant information from the `restaurants` array. Finally, the `div`
element is appended to the `container` element in the HTML. */
const container = document.getElementById("restaurantContainer");
const notfound = document.getElementById("no-results-found");
const searchInput = localStorage.getItem("searchInput");
let searchResult = false;

restaurants.forEach((restaurant) => {
  if (searchInput === restaurant.food) {
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

    searchResult = true;
  }
});

if (!searchResult) {
  notfound.innerHTML = ""; // Clear any previous content in the "No results found" container

  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  h4.textContent = "No results found...";
  div.appendChild(h4);
  notfound.appendChild(div);
}

// Hide or show the appropriate container based on the search result
if (searchResult) {
  container.classList.remove("hidden");
  notfound.classList.add("hidden");
} else {
  container.classList.add("hidden");
  notfound.classList.remove("hidden");
}
