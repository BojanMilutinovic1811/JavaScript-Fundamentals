document.getElementById('joke-button').addEventListener('click', getJokes);





function getJokes(e) {

    let number = document.getElementById('number').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`);



    xhr.onload = function () {

        if (this.status === 200) {
            let jokes = '',
                response = JSON.parse(this.responseText);

            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    jokes += `<li>${joke.joke}</li>`
                })
            }

            document.getElementById('jokes-list').innerHTML = jokes;

            // console.log(response)

        }
    }


    xhr.send();


    document.getElementById('number').value = '';

    e.preventDefault();
}