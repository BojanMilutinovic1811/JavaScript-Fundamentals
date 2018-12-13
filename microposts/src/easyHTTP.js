class EasyHTTP {
    get(url) {
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
    post(url, data) {
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
    put(url, data) {
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
    delete(url) {
        fetch(url, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
            
        })
        .then(()=> console.log('content deleted'))
        .catch(err=>console.log(err))
    }
}


export const easyLikeSundayMorning = new EasyHTTP();