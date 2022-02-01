import { fetchJson, IS_DEV } from '../utils';

// define vars
const API_URL = 'https://api.github.com';
const API_USER_ID = import.meta.env.VITE_USER_GITHUB;
const API_USER_URL = `${API_URL}/users/${API_USER_ID}`;

// helpers
const fetchFile = async (path) => fetchJson(new URL(path, import.meta.url));

export const createGithubAPI = () => {
    return {
        getProfile() {
            return IS_DEV ? fetchFile('profile.json') : fetchJson(API_USER_URL);
        },

        getRepositories(query = {}) {
            // return mock-data in DEV
            if (IS_DEV) return fetchFile('repos.json');

            // create url with given query params
            const url = new URL(`${API_USER_URL}/repos`);
            url.search = new URLSearchParams(query);

            // fetch and return json
            return fetchJson(url);
        },
    };
};
