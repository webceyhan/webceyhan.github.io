// GITHUP API //////////////////////////////////////////////////////////////////////////////////////

const DEBUG = true;
const GITHUB_URL = 'https://api.github.com/users/webceyhan';

// const async getProfile = () => {
//     return await fetch(GITHUB_URL);
// }

async function getRepositories() {
    const url = DEBUG ? '/data/repos.json' : `${GITHUB_URL}/repos`;
    const data = await (await fetch(url)).json();

    // filter repos without homepage (no deployed webapp)
    return data.filter((repo) => repo.homepage !== '' && repo.homepage != null);
}

const timestamp = (date) => new Date(date).toLocaleDateString();

// VUE APP /////////////////////////////////////////////////////////////////////////////////////////

Vue.createApp({
    data() {
        return {
            repos: [],
        };
    },
    methods: {
        timestamp,
    },
    async created() {
        this.repos = await getRepositories();
    },
}).mount('#app');
