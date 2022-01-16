// GITHUP API //////////////////////////////////////////////////////////////////////////////////////

const DEBUG = true;
const GITHUB_URL = 'https://api.github.com/users/webceyhan';

// const async getProfile = () => {
//     return await fetch(GITHUB_URL);
// }

async function getRepositories() {
    const url = DEBUG ? '/data/repos.json' : `${GITHUB_URL}/repos`;

    return await (await fetch(url)).json();
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
