/* This code is creating a list of restaurants with their respective food items, categories, and a
button to add them to a cart. It is using JavaScript to dynamically create HTML elements for each
restaurant and add them to the DOM. The `restaurants` array contains objects with information about
each restaurant, and the `forEach` loop is iterating over each object to create a new `div` element
for each restaurant. Inside each `div`, the code is creating and appending `img`, `h3`, `p1`, `p2`,
and `button` elements with the relevant information from the `restaurants` array. Finally, the `div`
element is appended to the `container` element in the HTML. */
const restaurants = [
    {
      "img": "",
      "restaurant name": "WOW MOMO",
      "food": "Chicken Momo",
      "category": "Chinese",
      "button": "Add to Cart"
    },
    {
      "img": "",
      "restaurant name": "WOW BIRIYANI",
      "food": "Chicken Biryani",
      "category": "Mughlai",
      "button": "Add to Cart"
    },
    {
      "img": "",
      "restaurant name": "WOW PIZZA",
      "food": "Chicken Pizza",
      "category": "Italian",
      "button": "Add to Cart"
    },
    {
      "img": "",
      "restaurant name": "WOW PASTA",
      "food": "Chicken Pasta",
      "category": "Italian",
      "button": "Add to Cart"
    },
    {
        "img": "",
        "restaurant name": "WOW MOMO",
        "food": "Chicken Momo",
        "category": "Chinese",
        "button": "Add to Cart"
      },
      {
        "img": "",
        "restaurant name": "WOW BIRIYANI",
        "food": "Chicken Biryani",
        "category": "Mughlai",
        "button": "Add to Cart"
      },
      {
        "img": "",
        "restaurant name": "WOW PIZZA",
        "food": "Chicken Pizza",
        "category": "Italian",
        "button": "Add to Cart"
      },
      {
        "img": "",
        "restaurant name": "WOW PASTA",
        "food": "Chicken Pasta",
        "category": "Italian",
        "button": "Add to Cart"
      },
      {
        "img": "",
        "restaurant name": "WOW MOMO",
        "food": "Chicken Momo",
        "category": "Chinese",
        "button": "Add to Cart"
      },
      {
        "img": "",
        "restaurant name": "WOW BIRIYANI",
        "food": "Chicken Biryani",
        "category": "Mughlai",
        "button": "Add to Cart"
      },
      {
        "img": "",
        "restaurant name": "WOW PIZZA",
        "food": "Chicken Pizza",
        "category": "Italian",
        "button": "Add to Cart"
      },
      {
        "img": "",
        "restaurant name": "WOW PASTA",
        "food": "Chicken Pasta",
        "category": "Italian",
        "button": "Add to Cart"
      }
  ];

  const container = document.getElementById("restaurantContainer");

  restaurants.forEach(restaurant => {
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

    const button = document.createElement("button-add-to-cart");
    button.classList.add("button-add-to-cart");
    button.textContent = restaurant.button;

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);

    container.appendChild(div);
  });