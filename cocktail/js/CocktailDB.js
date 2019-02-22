class CocktailDB {


    getFromDB() {
        let cocktails;

        if (localStorage.getItem('cocktails') === null) {
            cocktails = [];
        } else {
            cocktails = JSON.parse(localStorage.getItem('cocktails'))
        }

        return cocktails; 
    }

    saveToDB(cocktail) {
        let cocktails = this.getFromDB()
        cocktails.push(cocktail)
        localStorage.setItem('cocktails', JSON.stringify(cocktails)) 

    }

    removeFromDB(id) {
        let cocktails = this.getFromDB()
        cocktails.forEach((cocktail, index) => {
            if(id === cocktail.id) {
                cocktails.splice(index, 1)
            }
        })

        localStorage.setItem('cocktails', JSON.stringify(cocktails))

    }



}