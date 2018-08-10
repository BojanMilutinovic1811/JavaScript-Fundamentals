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

class UI {
    createMovieElement(movie) {
        const option = document.createElement('option');
        option.textContent = movie.movieData();
        const select = document.getElementById('movieOption');
        select.appendChild(option);
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.textContent = movie.movieData();
        const movieList = document.getElementById('movie-list');
        movieList.appendChild(li);
    }

    createProgram() {
        const program = document.createElement('option');
        program.textContent = document.getElementById('date').value
        const programOption = document.getElementById('program');
        programOption.appendChild(program);
    }
}


function createMovie(e) {
    let movieTitle = document.getElementById('title').value,
        movieLength = document.getElementById('length').value,
        movieGenre = document.getElementById('genre').value;
    const movie = new Movie(movieTitle, movieLength, movieGenre),
        ui = new UI();
    ui.createMovieElement(movie);

    (function () {
        document.getElementById('title').value = '';
        document.getElementById('length').value = '';
    })();
    e.preventDefault();
}

document.getElementById('movie').addEventListener('submit', createMovie);

document.getElementById('create-program').addEventListener('click', function () {
    const ui = new UI;
    ui.createProgram();
});