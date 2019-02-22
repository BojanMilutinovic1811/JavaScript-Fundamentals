class Ui {

    displayCategories() {
        const categoryList = cocktail.getCategories()
                .then(result => {
                    console.log(result)
                    const catList = result.drinks

                    const firstOption = document.createElement('option')
                    firstOption.textContent = '- select -'
                    firstOption.value = ''
                    document.getElementById('search').appendChild(firstOption)


                    catList.forEach(category => {
                        const option = document.createElement('option')
                        option.textContent = category.strCategory
                        option.value = category.strCategory.split(' ').join('_')
                        document.getElementById('search').appendChild(option)
                    })
                })
    }

    displayMessage(message, className) {
        const divMessage = document.createElement('div');
        divMessage.classList.add("alert", "alert-"+className, "alert-dismissible", "fade", "show");
        divMessage.setAttribute('role', 'alert')
        divMessage.innerHTML = `
                    <strong>${message}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                            `
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.insertBefore(divMessage, jumbotron.firstChild)
        setTimeout(() => {
            divMessage.remove()
        }, 2500);
    }

    displayCocktailsByName(name) {
        const wrapper = document.querySelector('.results-wrapper')
        wrapper.style.display = 'block'
        let results = document.getElementById('results')
        name.drinks.forEach(cocktail => {
        
            results.innerHTML += `
            <div class="card col-md-4">
            <img class="card-img-top" src="${cocktail.strDrinkThumb}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${cocktail.strDrink}</h5>
              <p class='card-text'>${cocktail.strInstructions}</p>
              <p class='card-text'>
                <ul class='list-group'>
                    <li class='list-group-item bg-success'>Ingredients</li>
                    ${this.displayIngredients(cocktail)}
                </ul>
              </p>
              <p class='card-text font-weight-bold'>Additional info:</p>
                <p class='card-text'>
                    <span class='badge badge-pill badge-success'>
                    ${cocktail.strAlcoholic}
                    </span>
                    <span class='badge badge-pill badge-warning'>
                    Category: ${cocktail.strCategory}
                    </span>
                </p>
              
            </div>
          </div>
            `

        })
        this.isFavorite()
    }

    displayIngredients(cocktail) {
        let ingredients = [];
        for(let i = 1; i<16; i++) {
            const ingredientMeasure = {}
            if(cocktail[`strIngredient${i}`] !== '') {
                ingredientMeasure.ingredient = cocktail[`strIngredient${i}`]
                ingredientMeasure.measure = cocktail[`strMeasure${i}`]
                ingredients.push(ingredientMeasure)
            }
        }
        let ingredientsTemplate = ''
        ingredients.forEach(ingredient => {
            ingredientsTemplate += `
                <li class='list-group-item'>${ingredient.ingredient} - ${ingredient.measure}</li>
            `
        })
        return ingredientsTemplate; 
    }

    displayCocktails(searchResult) {
        const wrapper = document.querySelector('.results-wrapper')
        wrapper.style.display = 'block'
        let results = document.getElementById('results')
        searchResult.drinks.forEach(cocktail => {
        
            results.innerHTML += `
            <div class="card mx-1 col-md-3 my-2 p-2">
                <button class='btn btn-outline-info favorite-btn' data-id='${cocktail.idDrink}'>+</button>
                <img class="card-img-top" src="${cocktail.strDrinkThumb}" alt="Card image cap">
                    <div class="card-body">
                        <h2 class="card-title text-center">${cocktail.strDrink}</h5>
                        <button type="button" class="get-recipe btn btn-primary" data-toggle="modal" data-id='${cocktail.idDrink}' data-target="#recipe">
                        More Info
                        </button>
                    </div>
            </div>          
                    `
                    })
                    this.isFavorite()
            }

    displayRecipe(recipe) {
        const modalTitle = document.querySelector('.modal-title'),
              modalDescription = document.querySelector('.modal-body .description-text'),
              modalIngredients = document.getElementById('ingredients-list');

              modalTitle.innerHTML = recipe.strDrink;
              modalDescription.innerHTML = recipe.strInstructions;
              modalIngredients.innerHTML = this.displayIngredients(recipe)
    }

    clearResults() {
        const resultsDiv = document.getElementById('results')
        resultsDiv.innerHTML = ''
    }

    displayFavorites(cocktails) {
        const favoritestable = document.getElementById('favorites-body')
        
        cocktails.forEach(cocktail => {
            const tableRow = document.createElement('tr')
            tableRow.innerHTML = `
                <td>
                    <img src="${cocktail.image}"  width=100>
                </td>
                <td>
                    ${cocktail.name}
                </td>
                <td>
                    <a href='#' data-toggle='modal' data-target='#recipe' data-id="${cocktail.id}" class='btn btn-success  get-recipe'>View</a>
                </td>
                <td>
                    <a href='#' data-id="${cocktail.id}" class='btn btn-danger remove-recipe'>Remove</a>
                </td>
            `
            favoritestable.appendChild(tableRow)    
        })


    }

    removeFavorite(element) {
        element.remove()
    }


    isFavorite() {
        const cocktails = cocktailDB.getFromDB();

        cocktails.forEach(cocktail => {
            let {id} = cocktail;

            let favoriteCocktail = document.querySelector(`[data-id='${id}']`)
            if(favoriteCocktail) {
                favoriteCocktail.classList.add('is-favorite')
                favoriteCocktail.textContent = '-'
            }
        })
    }

}