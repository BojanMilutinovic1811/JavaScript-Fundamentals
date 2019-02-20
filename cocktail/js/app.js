const ui = new Ui; 
const cocktail = new Cocktail; 

const searchForm = document.getElementById('search-form')



searchForm.addEventListener('submit', getDrinks)



function getDrinks(e) {
    e.preventDefault()




    const cocktails = document.getElementById('search');
    console.log(cocktails);

    let serverResponse; 

    switch(cocktails.name) {
        case 'name':
            serverResponse = cocktail.getCocktailsName(cocktails.value)
            break;
        case 'ingredient':
            serverResponse = cocktail.getCocktailsIngredient(cocktails.value)
            break;
    }

    if(cocktails.value === '') {
        ui.displayMessage("Please enter a cocktail name.", 'warning')
    } else {
        serverResponse.then(res => {
                if(res.drinks) {
                    ui.displayCocktails(res)
                } else {
                    ui.displayMessage('Please enter a valid drink or cocktail name', 'warning')
                }
                cocktails.value = ''
            })
        } 
    }
