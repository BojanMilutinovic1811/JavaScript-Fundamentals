const ui = new Ui; 
const cocktail = new Cocktail; 

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', getDrinks);

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
                    ui.displayCocktailsByIngredient(res)
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
    }

    function documentReady() {
        const searchCategory = document.querySelector('.search-category')
        if(searchCategory) {
            ui.displayCategories()
        }
    }
