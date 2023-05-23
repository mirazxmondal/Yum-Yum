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

// All Food Cards
const container = document.getElementById("restaurantContainer");

restaurants.forEach((restaurant) => {
  const div = document.createElement("div");
  div.classList.add("restaurant");

  const img = document.createElement("img");
  img.src = restaurant.img;
  console.log(restaurant.img);

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
});

// North India Food Cards
const northindiafood = document.getElementById("north-india");

northindiafood.addEventListener("click", function () {
  const container = document.getElementById("restaurantContainer");
  container.innerHTML = "";
  restaurants.forEach(function (restaurant) {
    if (restaurant.category == "North India") {
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
});

// South India Food Cards
const southindiafood = document.getElementById("south-india");

southindiafood.addEventListener("click", function () {
  const container = document.getElementById("restaurantContainer");
  container.innerHTML = "";
  restaurants.forEach(function (restaurant) {
    if (restaurant.category == "South India") {
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
});

// Bengali Food Cards
const bengalifood = document.getElementById("bengali");

bengalifood.addEventListener("click", function () {
  const container = document.getElementById("restaurantContainer");
  container.innerHTML = "";
  restaurants.forEach(function (restaurant) {
    if (restaurant.category == "Bengali") {
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
});

// Chinese Food Cards
const chinesefood = document.getElementById("chinese");

chinesefood.addEventListener("click", function () {
  const container = document.getElementById("restaurantContainer");
  container.innerHTML = "";
  restaurants.forEach(function (restaurant) {
    if (restaurant.category == "Chinese") {
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
});

// Italian Food Cards
const italianfood = document.getElementById("italian");

italianfood.addEventListener("click", function () {
  const container = document.getElementById("restaurantContainer");
  container.innerHTML = "";
  restaurants.forEach(function (restaurant) {
    if (restaurant.category == "Italian") {
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
});

// Chaat Food Cards
const chaatfood = document.getElementById("chaat");

chaatfood.addEventListener("click", function () {
  const container = document.getElementById("restaurantContainer");
  container.innerHTML = "";
  restaurants.forEach(function (restaurant) {
    if (restaurant.category == "Chaat") {
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
});
