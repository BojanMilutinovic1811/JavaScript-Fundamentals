class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }
    movieData() {
        const shortGenre = (this.genre.charAt(0) + this.genre.charAt(this.genre.length - 1)).toUpperCase();
        return `${this.title}, ${this.length} min, ${shortGenre}`;
    }
}

class Program {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.list = [];
    }
    programData() {
        return `${this.name}  -  ${this.date}`
    }
}
 

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

    /*
    createFestivalElement(program, movie) {
        const festivalElement = document.createElement('li');
              festivalElement.className = 'list-group-item list-group-item-action list-group-item-success';
              const festivalList = document.getElementById('festival-list');
              festivalList.appendChild(festivalElement);
    }
    */

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


function createMovie(e) {
    let movieTitle = document.getElementById('title').value,
        movieLength = document.getElementById('length').value,
        movieGenre = document.getElementById('genre').value;
    const movie = new Movie(movieTitle, movieLength, movieGenre),
        ui = new UI();
        if(movieTitle === '' || movieLength ==='' || movieGenre === '') {
            ui.showAlert('Please fill in required movie fields!', 'danger', 'alertHolder1');
        } else {
            ui.createMovieElement(movie);
        }

    (function () {
        document.getElementById('title').value = '';
        document.getElementById('length').value = '';
    })();
    e.preventDefault();
}

function createProgram (e) {
    const ui = new UI,
    programName = document.getElementById('program-name').value,
    programDate = document.getElementById('date').value,
    program = new Program(programName, programDate); 
           
          if(programName === '' || programDate === '') {
              ui.showAlert('Please fill in required program fields!', 'danger', 'alertHolder2');
          } else {
              ui.createProgramElement(program);
          }
          (function () {
            document.getElementById('program-name').value = '';
            document.getElementById('date').value = '';
        })();
    

    e.preventDefault();
}


/*
function addMovie(e) {
    const movieForProgram = document.getElementById('movieOption').value,
          programOption = document.getElementById('program').value;
             
          if (movieForProgram === '' || programOption === '') {
            ui.showAlert('Please select appropriate options!', 'danger', 'alertHolder3')
          } else {
            ui.createFestivalElement();
          }
          e.preventDefault();
}
*/

function removeListItem(e) {
    e.target.parentElement.parentElement.remove();

}


document.querySelectorAll('ul').forEach(ul => ul.addEventListener('click',removeListItem));

document.getElementById('movie').addEventListener('click', createMovie);

document.getElementById('create-program').addEventListener('click', createProgram);

// document.getElementById('movieAdd').addEventListener('click', addMovie);