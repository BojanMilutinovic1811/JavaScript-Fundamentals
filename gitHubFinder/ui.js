class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    displayUser(user) {
        let output = '';
        this.profile.innerHTML = `
            <div class='card card-body mb-3'>
                <div class='row'>
                    <div class='col-md-3'>
                        <img class='img-fluid mb-2' src='${user.profile.avatar_url}'>
                        <a href='${user.profile.html_url}' target='_blank' class='btn btn-block btn-primary mb-3'>View Profile</a>
                    </div>
                    <div class='col-md-9'>
                        <span class='badge badge-primary'>Public Repos: ${user.profile.public_repos}</span>
                        <span class='badge badge-secondary'>Public Gists: ${user.profile.public_gists}</span>
                        <span class='badge badge-success'>Followers: ${user.profile.followers}</span>
                        <span class='badge badge-info'>Following: ${user.profile.following}</span>
                        <br><br>
                        <ul class='list-group'>
                            <li class='list-group-item'>Company: ${user.profile.company}</li>
                            <li class='list-group-item'>Blog: ${user.profile.blog}</li>
                            <li class='list-group-item'>Location: ${user.profile.location}</li>
                            <li class='list-group-item'>Member since: ${user.profile.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class='page-heading mb-3'>Latest Repositories</h3>
            <div id='repos'></div>
        `

        user.repos.forEach(repo=> {
            output += `
                <div class='card card-body mb-2'>
                    <div class='row'>
                        <div class='col-md-6'>
                            <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
                        </div>
                        <div class='col-md-6'>
                        <span class='badge badge-primary'>Stars: ${repo.stargazers_count}</span>
                        <span class='badge badge-secondary'>Watchers: ${repo.watchers_count}</span>
                        <span class='badge badge-success'>Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        })

        document.getElementById('repos').innerHTML = output;
    }

    showAlert() {
        const alertDiv = document.getElementById('alert');
        alertDiv.style.visibility = 'visible';
        this.clearProfile();

        setTimeout(()=>{
            alertDiv.style.visibility = 'hidden';
        }, 3000)
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }
}