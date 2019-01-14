

const yes = document.getElementById('yes');
const no = document.getElementById('no');
const prompt = document.querySelector('.prompt')

function negativeAnswer() {

    prompt.innerHTML = `<p>Unfortunately, we are not able to provide you our service without your consent! If you changed your mind you can go back and confirm that you agree with our policy.</p>
                    
    <div class="buttons">
            <button id='back'>Go back</button>
    </div>`
    back();
    
}

function back() {
    const back = document.getElementById('back');
    back.addEventListener('click', goBack)
    function goBack(){
        prompt.innerHTML = `  <p>Dear user, in order to use this app we need you to agree with our terms of service. Actually, we would like to use your geolocation so we could provide you the information about air traffic within your vicinity.</p>
        <h4>Do you agree with our terms of service?</h4>
        <div class="buttons">
                <button id="yes" onclick="fetchData()">Yes</button>
                <button id='no' onclick="negativeAnswer()">No</button>
        </div>
       `
    }
}

function fetchData() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude.toFixed(6);
        const longitude = position.coords.longitude.toFixed(6);
        prompt.innerHTML = `
        <p>This is your current longitude: ${longitude}</p>
        <p>This is your current latitude: ${latitude}</p>
        <div class='buttons'>
        <button id='back'>Go back</button>
        </div>
        `;
        back();
    

      

})}
