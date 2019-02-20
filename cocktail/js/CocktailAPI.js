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

}