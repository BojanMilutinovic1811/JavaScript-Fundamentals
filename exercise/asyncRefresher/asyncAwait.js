// simple async await example



async function fetchSomeData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonData = await data.json()
    return jsonData
}


fetchSomeData().then(data => console.log(data));