import fetchJsonp from 'fetch-jsonp';


const petForm = document.getElementById('pet-form');

petForm.addEventListener('submit', fetchPets);


function fetchPets(e) {
    e.preventDefault();

    const animal = document.getElementById('animal');
    const zip = document.getElementById('zip');

    fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=8a6ac978d2a377461f8bd155f85c4dd7&${animal}&location=${zip}&callback=callback`, {
        jsonpCallbackFunction: 'callback'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}