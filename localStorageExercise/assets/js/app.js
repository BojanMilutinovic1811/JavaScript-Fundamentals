// variables 
const tweet = document.getElementById('tweet'); 
const formSubmit = document.querySelector('form');
const tweetList = document.getElementById('tweet-list');

 
// event listeners
document.addEventListener('DOMContentLoaded', loadStorage);
formSubmit.addEventListener('submit', submitForm);
tweetList.addEventListener('click', deleteTweet);




// functions 

function loadStorage() {
    let list = getStorageItems();
    list.forEach(item=>{
          
    const liElement = document.createElement('li');
    liElement.textContent = item; 
    const removeLink = document.createElement('a');
    removeLink.classList = 'remove-tweet';
    removeLink.textContent = 'X';
    liElement.appendChild(removeLink);
    tweetList.appendChild(liElement);

    })
}

function deleteTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
    deleteFromStorage(e.target.parentElement.textContent);
}

function submitForm(e) {
    e.preventDefault()
    let tweet = document.getElementById('tweet').value; 
    const liElement = document.createElement('li');
    liElement.textContent = tweet; 
    const removeLink = document.createElement('a');
    removeLink.classList = 'remove-tweet';
    removeLink.textContent = 'X';
    liElement.appendChild(removeLink);
    tweetList.appendChild(liElement);
    setStorage(tweet);
    alert('tweet added');
    this.reset();
}

// set storage 
function setStorage(tweet) {
     let list = getStorageItems();
     list.push(tweet);
     localStorage.setItem('tweets', JSON.stringify(list));
     
}

// get items from storage

function getStorageItems() {
    let tweetList;
    let lsTweetList = localStorage.getItem('tweets') 
    if (lsTweetList === null) {
        tweetList = [];
    } else {
        tweetList = JSON.parse(lsTweetList)
    }
    return tweetList; 
}

// delete from storage function

function deleteFromStorage(text) {
    let editedText = text.slice(0,-1);
    let storageItems = getStorageItems();
    let filteredList = storageItems.filter(item=>{
        return item!==editedText; 
    })
    localStorage.setItem('tweets', JSON.stringify(filteredList))
}