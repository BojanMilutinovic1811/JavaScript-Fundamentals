const github = new GitHub;
const ui = new Ui;

const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', getUser);


function getUser(e) {
    const userName = e.target.value;

    if (userName !== "") {
        github.getUser(userName)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert
                    ui.showAlert('User not found!', 'alert');
                } else {
                    // display user info
                    ui.displayUser(data);
                }
            })
    } else {
        ui.clearProfile();
    }

}