/**
 * This is a JavaScript function that fetches recipes from the Edamam API based on a user's search
 * query and displays them on a webpage.
 * @param recipe - An object containing information about a recipe, including its label, image,
 * calories, ingredients, and URL.
 * @returns The code is returning a recipe search application that fetches recipes from the Edamam API
 * based on user input, creates recipe cards for each recipe, and displays them on the webpage.
 */
const API_KEY = 'b687c990f5e635ba4fac69673e78e56f';
const APP_ID = '0ac89faf';
const BASE_URL = `https://api.edamam.com/search?app_id=0ac89faf&app_key=b687c990f5e635ba4fac69673e78e56f`;

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const recipesContainer = document.getElementById('recipes-container');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    const url = `${BASE_URL}&q=${query}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const recipes = data.hits;
            recipesContainer.innerHTML = '';
            recipes.forEach(recipe => {
                const recipeCard = createRecipeCard(recipe);
                recipesContainer.appendChild(recipeCard);
            });
        });
});

function createRecipeCard(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
        <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
        <h3>${recipe.recipe.label}</h3>
        <p>Calories: ${recipe.recipe.calories.toFixed(2)}</p>
        <p>Ingredients:</p>
        <ul>
            ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <a href="${recipe.recipe.url}" target="_blank"><button style="background-color: #ff6b81; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-top:20px">View Recipe</button></a>
    `;
    return recipeCard;
}


function myFunction() {
    document.getElementById("badge-main").innerHTML = "";
}