console.log("Explore-Page")

const API_KEY = 'c48006e5fa42c06f4741bcb41d2628aa';
const APP_ID = '0ac89faf';
const BASE_URL = `https://api.edamam.com/search?app_id=0ac89faf&app_key=c48006e5fa42c06f4741bcb41d2628aa`;

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
        <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
    `;
    return recipeCard;
}