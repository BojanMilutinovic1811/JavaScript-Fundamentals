


(function(){

    class Genre {
        constructor(genre) {
            this.genre = genre;
        }

        getData() {
            return (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();
        }
    }

    class Movie {
        constructor(title, genre, length) {
            this.title = title; 
            this.genre = genre.getData();
            this.length = length;
        }

        getData() {

            return `${this.title}, ${this.length}min, ${this.genre}`
        }
    }

    class Program {
        constructor(date) {
            this.date = new Date(date);
            this.listOfMovies = [];
            this.totalNumberOfMovies = 0;
        }

        addMovie(movie) {
            this.listOfMovies.push(movie);
            this.totalNumberOfMovies += 1;
        }

        getData() {
            const datestring = `${this.date.getDate()}-${this.date.getMonth()+1}-${this.date.getFullYear()}`;
            let programLength = 0;
            let movieList = '';
            this.listOfMovies.forEach(movie => {
                programLength += movie.length; 
                
                movieList += `${movie.getData()} \n`
            })
            this.listOfMovies.forEach
            return `${datestring}, program duration ${programLength} min \n${movieList}`
        }
    }


    

    class Festival {
        constructor(name) {
            this.name = name;
            this.listOfPrograms = [];
            let totalNum = 0;
            for(let i = 0; i < this.listOfPrograms.length; i++) {

            }
            this.numOfMoviesInPrograms = 0;
        }

        addProgram(program) {
            this.listOfPrograms.push(program)
        }

        getData() {
            let listofPrograms = '';
            this.listOfPrograms.forEach(program => {
                listofPrograms += `${program.getData()} \n`
            })
            return `${this.name} has ${this.numOfMoviesInPrograms} movies; \n${listofPrograms}`
        }
    }



    const genre1 = new Genre('action');
    const genre2 = new Genre ('thriller');
    const movie1 = new Movie('The Shawshank Redemption', genre1, 120);
    const movie2 = new Movie('The Silence of the Lambs', genre2, 130);
    const program1 = new Program('october 11 2018');
    const program2 = new Program('november 1 2018');
    program2.addMovie(movie1);
    program2.addMovie(movie2);
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    const festival1 = new Festival('Festival1');
    festival1.addProgram(program1);
    festival1.addProgram(program2);
    console.log(festival1.listOfPrograms);

   
})()