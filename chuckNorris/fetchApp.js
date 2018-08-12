document.getElementById('joke-button').addEventListener('click', fetchJokes);

let numJokes = document.getElementById('number');
function fetchJokes(e) {
 

    fetch(`http://api.icndb.com/jokes/random/${numJokes.value}`)
    .then(res => res.json())
    .then(res => {
        let output = '';
        res.value.forEach(joke=>{
            output += `<li>${joke.joke}</li>`;
        })
        document.getElementById('jokes-list').innerHTML = output; 
    })
    numJokes.value = '';

e.preventDefault();
}