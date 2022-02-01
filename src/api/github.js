// define vars
const IS_DEV = import.meta.env.DEV;
const BASE_URL = 'https://api.github.com';
const PROFILE_URL = `${BASE_URL}/users/webceyhan`;

// helpers
const fetchJson = async (url) => (await fetch(url)).json();
const fetchFile = async (path) => fetchJson(new URL(path, import.meta.url));

export const createGithubAPI = () => {
    return {
        getProfile() {
            return IS_DEV ? fetchFile('profile.json') : fetchJson(PROFILE_URL);
        },

        getRepositories(query = {}) {
            // return mock-data in DEV
            if (IS_DEV) return fetchFile('repos.json');

            // create url with given query params
            const url = new URL(`${PROFILE_URL}/repos`);
            url.search = new URLSearchParams(query);

            // fetch and return json
            return fetchJson(url);
        },
    };
};
