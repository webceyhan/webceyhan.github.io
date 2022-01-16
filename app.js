// GITHUP API //////////////////////////////////////////////////////////////////////////////////////

const GITHUB_URL = 'https://api.github.com/users/webceyhan';

// const async getProfile = () => {
//     return await fetch(GITHUB_URL);
// }

async function getRepositories() {
    return await (await fetch(GITHUB_URL + '/repos')).json();
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
        timestamp
    },  
    async created() {
        this.repos = await getRepositories();
    },
}).mount('#app');
