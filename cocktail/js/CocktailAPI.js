class Cocktail {


    async getCocktailsName(cocktails) {
        const cocktailsFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktails}`)
        const results = await cocktailsFetch.json()

        return results; 
    }

    async getCocktailsIngredient(ingredient) {

        const cocktailsFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        

        const results = await cocktailsFetch.json()

        return results
    }

    async getSingleRecipe(id) {

        const recipeFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const results = await recipeFetch.json();

        return results 

    }

    async getCocktailsCategory(category) {

        const categoryFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        const results = await categoryFetch.json();

        return results 

    }

    async getCategories() {

        const categoriesFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        const results = await categoriesFetch.json();

        return results 

    }
    async getAlcoholOrNot(term) {

        const alcoholFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`)
        const results = await alcoholFetch.json();

        return results 

    }

}