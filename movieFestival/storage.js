class Store {
 
    static getMovies() {
        let movies;
        if(localStorage.getItem('movies') === null) {
            movies = [];
        } else {
            movies = JSON.parse(localStorage.getItem('movies'));
        }
    return movies; 
    }

    static displayMovies() {
        const movies = Store.getMovies();
 
        movies.forEach(movie => {
             
            const ui = new UI;
            ui.createMovieElement(movie);
        });
    }

    static setMovieData(movie) {
        const movies = Store.getMovies();
        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies))
         
    }

    static removeMovieData(movieInfo) {
        const movies = Store.getMovies();
        movies.forEach((movie, index) => {
            if(movieInfo.includes(movie.title)) {
                movies.splice(index, 1);
            }
            
        })
        localStorage.setItem('movies', JSON.stringify(movies));
    }
}