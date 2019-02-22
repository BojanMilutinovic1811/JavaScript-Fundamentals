const ui = new Ui; 
const cocktail = new Cocktail; 
const cocktailDB = new CocktailDB;

const searchForm = document.getElementById('search-form');
if(searchForm) {    
    searchForm.addEventListener('submit', getDrinks);
}

const resultsDiv = document.getElementById('results')
if(resultsDiv) {
    resultsDiv.addEventListener('click', resultsDelegation)
}

document.addEventListener('DOMContentLoaded', documentReady)



function getDrinks(e) {
    e.preventDefault()

    const cocktails = document.getElementById('search');
    let serverResponse; 

    switch(cocktails.name) {
        case 'name':
            serverResponse = cocktail.getCocktailsName(cocktails.value)
            break;
        case 'ingredient':
            serverResponse = cocktail.getCocktailsIngredient(cocktails.value)
            break;
        case 'category':
            serverResponse = cocktail.getCocktailsCategory(cocktails.value)
            break;
        case 'alcohol': 
            serverResponse = cocktail.getAlcoholOrNot(cocktails.value)
            break;
    }

    ui.clearResults()

    if(cocktails.value === '') {
        ui.displayMessage("Please enter a cocktail name.", 'warning')
    } else {
        serverResponse.then(res => {
            if(res.drinks === null) {
                ui.displayMessage('There is no such cocktail, try some other term.', 'warning')
                cocktails.value = ''
            } else {
                if(cocktails.name === 'name') {
                    ui.displayCocktailsByName(res)
                } else {
                    ui.displayCocktails(res)
                }
                    cocktails.value = ''
                }
            }
            )
        } 
    }


    function resultsDelegation(e) {
        e.preventDefault()
        if(e.target.classList.contains('get-recipe')) {
            cocktail.getSingleRecipe(e.target.dataset.id)
            .then(result => {
                ui.displayRecipe(result.drinks[0])
            })
        }

        if(e.target.classList.contains('favorite-btn')) {
            if(e.target.classList.contains('is-favorite')) {
                e.target.classList.remove('is-favorite')
                e.target.textContent = '+'
                cocktailDB.removeFromDB(e.target.dataset.id)

            } else {
                e.target.classList.add('is-favorite')
                e.target.textContent = '-'

                const cocktail = {
                    id: e.target.dataset.id,
                    name: e.target.parentElement.querySelector('.card-title').textContent,
                    image: e.target.parentElement.querySelector('.card-img-top').src
                }
                cocktailDB.saveToDB(cocktail)
            }
        }
    }

    function documentReady() {

        ui.isFavorite()

        const searchCategory = document.querySelector('.search-category')
        if(searchCategory) {
            ui.displayCategories()
        }

        const favoritesTable = document.getElementById('favorites')
        if(favoritesTable) {

            const cocktails = cocktailDB.getFromDB()
            ui.displayFavorites(cocktails)
       

        favoritesTable.addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target.classList.contains('get-recipe')) {
                
                cocktail.getSingleRecipe(e.target.dataset.id)
                .then(recipe => {
                        ui.displayRecipe(recipe.drinks[0])
                    })
            }

            if(e.target.classList.contains('remove-recipe')) {
                ui.removeFavorite(e.target.parentElement.parentElement)
                cocktailDB.removeFromDB(e.target.dataset.id)
            }

        })
    }
    }
