class Ui {



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

    displayCocktails(cocktails) {
        const wrapper = document.querySelector('.results-wrapper')
        wrapper.style.display = 'block'
        let results = document.getElementById('results')
        cocktails.drinks.forEach(cocktail => {
        
            results.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${cocktail.strDrinkThumb}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${cocktail.strDrink}</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            `

        })
    }


}