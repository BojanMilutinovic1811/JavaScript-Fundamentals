class Movie {
    constructor(title, duration, genre) {
        this.title = title;
        this.duration = duration;
        this.genre = genre;
    }
    movieData() {
        const shortGenre = (this.genre.charAt(0) + this.genre.charAt(this.genre.length - 1)).toUpperCase();
        return `${this.title}, ${this.duration} min, ${shortGenre}`;
    }
}

class Program {
    constructor(name, date) {
        this.name = name;
        this.date = date;
        this.list = [];
        this.duration = 0;
    }
    programData() {
        return `${this.name}  -  ${this.date}`
    }
}
 
 const festivalList = [];

function createMovie(e) {
    let movieTitle = document.getElementById('title').value,
        movieLength = document.getElementById('length').value,
        movieGenre = document.getElementById('genre').value;
    const movie = new Movie(movieTitle, movieLength, movieGenre),
        ui = new UI();
        if(movieTitle === '' || movieLength ==='' || movieGenre === '') {
            ui.showAlert('Please fill in required movie fields!', 'danger', 'alertHolder1');
        } else if(movieLength.length>3){
            ui.showAlert('Movie length has to be under 1000 mins!', 'danger', 'alertHolder1');
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
              festivalList.push(program);
               
          }
          (function () {
            document.getElementById('program-name').value = '';
            document.getElementById('date').value = '';
        })();
    

    e.preventDefault();
}


   function addMovie(e) {
    const movieForProgram = document.getElementById('movieOption').value,
          programOption = document.getElementById('program').value;
          const ui = new UI();
          let movieLength = parseInt(movieForProgram.slice(movieForProgram.length-11, movieForProgram.length-8));
             
          let festivalName = programOption.slice(0, programOption.length-13);
          
          festivalList.forEach((program, index)=>{
              if(program.name === festivalName) {
                   
                  program.list.push(movieForProgram)
                  program.duration += movieLength;
              }
              
              ui.createFestivalElement(program)


          })
 
       
          e.preventDefault();
}


function removeListItem(e) {
    e.target.parentElement.parentElement.remove();

}


document.querySelectorAll('ul').forEach(ul => ul.addEventListener('click',removeListItem));

document.getElementById('movie').addEventListener('click', createMovie);

document.getElementById('create-program').addEventListener('click', createProgram);

document.getElementById('movieAdd').addEventListener('click', addMovie);