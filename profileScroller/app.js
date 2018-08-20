 let addressAPI = 'https://randomuser.me/api/?results=50'
 
  
 
 
 


const data = [{
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);
// console.log(profiles.next().value)

document.getElementById('next').addEventListener('click', nextUser);

nextUser();

function nextUser() {

    let nextUser = profiles.next().value
    if (nextUser !== undefined) {

        document.getElementById('userinfoDisplay').innerHTML = `
    <ul class='list-group'>
    <li class='list-group-item'>User name: ${nextUser.name}</li>
    <li class='list-group-item'>age: ${nextUser.age}</li>
    <li class='list-group-item'>Gender: ${nextUser.gender}</li>
    <li class='list-group-item'>Location: ${nextUser.location}</li>
    </ul>
    `
        document.getElementById('imageDisplay').innerHTML = `
        <img src='${nextUser.image}'>
    `
     } 
    //  else {
    //     window.location.reload();
    // }
}

function profileIterator(profiles) {
    let profileIndex = 0;
   

    return {
        next: function () {
            return profileIndex < profiles.length ? {
                value: profiles[profileIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}