class GitHub {
    constructor() {
        this.id = 'db6245ccd9edf1d47184';
        this.secret = '42453d7a272cc4eb2c55d4794c83cb2a97d58776';
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(userName) {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.id}&client_secret=${this.secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.id}&client_secret=${this.secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }

}