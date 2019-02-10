document.addEventListener('DOMContentLoaded', displayMovie);

function displayMovie(){
    const id = sessionStorage.getItem('id');
    const posterURL = sessionStorage.getItem('posterURL')
    console.log(posterURL);
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=796f993d`)
    .then(data => data.json())
    .then(movie => {
       console.log(movie)
       const movieLayout = document.getElementById('movie')
        console.log(movieLayout)

        movieLayout.innerHTML = `
            <div class='row'>
                <div class='col-md-4'>
                    <img src='${posterURL}' class='thumbnail' />
                </div>
                <div class='col-md-8'>
                    <h2>${movie.Title}</h2>
                    <ul class='list-group'>
                        <li class='list-group-item'><strong>Genre:</strong> ${movie.Genre}</li>
                        <li class='list-group-item'><strong>Released:</strong> ${movie.Released}</li>
                        <li class='list-group-item'><strong>Rating:</strong> ${movie.Rated}</li>
                        <li class='list-group-item'><strong>Actors:</strong> ${movie.Actors}</li>
                        <li class='list-group-item'><strong>Director:</strong> ${movie.Director}</li>
                    </ul>
                </div>
            </div>
            <div class='row'>
                <div class='well'>
                    <h3 class='text-center'>Plot</h3>
                    ${movie.Plot}
                    <hr>
                    <a href='http://imdb.com/title/${movie.imdbID}' target='_blank' class='btn btn-primary'>IMDB Link</a>
                    <a href='index.html' class='btn btn-primary'>Go Back to Search</a>
                </div>
            </div>
        `
        })
    .catch(err => console.log(err))
    }