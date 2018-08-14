class UI {

    createMovieElement(movie) {
        const movieOption = document.createElement('option');
        movieOption.innerHTML = movie.movieData();
        const select = document.getElementById('movieOption');
        select.appendChild(movieOption);
        const movieLi = document.createElement('li');
        movieLi.className = 'list-group-item list-group-item-action list-group-item-success';
        movieLi.innerHTML = `${movie.movieData()} <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>`;
        const movieList = document.getElementById('movie-list');
        movieList.appendChild(movieLi);
    }

    createProgramElement(program) {
        const programElement = document.createElement('option'),
        programOption = document.getElementById('program');
        programElement.textContent = program.programData();
        programOption.appendChild(programElement);
        const programLi = document.createElement('li');
        programLi.className = 'list-group-item list-group-item-action list-group-item-success';
        programLi.innerHTML = `${program.programData()} <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>`;
        const programList = document.getElementById('program-list');
        programList.appendChild(programLi);
         
    }

    
    createFestivalElement(program) {

        const festivalList = document.getElementById('program-collection');
        festivalList.innerHTML = `
            <li class="list-group-item list-group-item-action list-group-item-success">${program.name}  - movies in this program: ${program.list.length}, with total duration of: ${program.duration} min.<button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button></li>
        `;

    }
    

    showAlert(message, classType, alertHolder) {
        const alert = document.createElement('div');
        alert.textContent = message;
        alert.className = `alert alert-${classType} mt-3`;
        const alertSpot = document.getElementById('movie-form'),
              alertBefore = document.getElementById(alertHolder);
        alertSpot.insertBefore(alert, alertBefore);
        setInterval(()=>{
            alert.remove()
        }, 3000)
    }
}
