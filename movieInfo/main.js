
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', getMovies)

function getMovies(e) {
    e.preventDefault()

    const movie = document.getElementById('search-text').value
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=796f993d`)
    .then(data => data.json())
    .then(results => {
        console.log(results);
        let movies = results.Search;
        let output = '';
        movies.forEach(movie => {
            output += `
                <div class='col-md-3 mb-3'>
                    <div class='well text-center'>
                        <img src='${movie.Poster}'/>
                        <h6 class='my-2'>${movie.Title}</h6>
                        <a onclick='movieSelected("${movie.imdbID}", "${movie.Poster}")' class='btn btn-primary' href='#'>Movie Details</a>
                    </div>
                </div>
            `
        });
        document.getElementById('movies').innerHTML = output; 
    })
    .catch(err => console.log(err))
    }

    function movieSelected(id, posterURL) {
        sessionStorage.setItem('id', id)
        sessionStorage.setItem('posterURL', posterURL)

        window.location = 'movie.html'
    }