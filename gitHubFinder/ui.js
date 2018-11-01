class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    displayUser(user) {

        const {avatar_url, html_url, public_repos, public_gists, followers, following, company, blog, location, created_at} = user.profile; 

        const memberSince = created_at.slice(0,10)
        
        let output = '';
        this.profile.innerHTML = `
            <div class='card card-body mb-3'>
                <div class='row'>
                    <div class='col-md-3'>
                        <img class='img-fluid mb-2' src='${avatar_url}'>
                        <a href='${html_url}' target='_blank' class='btn btn-block btn-primary mb-3'>View Profile</a>
                    </div>
                    <div class='col-md-9'>
                        <span class='badge badge-primary'>Public Repos: ${public_repos}</span>
                        <span class='badge badge-secondary'>Public Gists: ${public_gists}</span>
                        <span class='badge badge-success'>Followers: ${followers}</span>
                        <span class='badge badge-info'>Following: ${following}</span>
                        <br><br>
                        <ul class='list-group'>
                            <li class='list-group-item'>Company: ${company}</li>
                            <li class='list-group-item'>Blog: ${blog}</li>
                            <li class='list-group-item'>Location: ${location}</li>
                            <li class='list-group-item'>Member since: ${memberSince}</li>
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