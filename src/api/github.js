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

        getSocialLinks() {
            return fetchFile('links.json');
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

// export const getRepositories = async () => {
//     const url = `${GITHUB_URL}/repos`;

//     const data = await (await fetch(url)).json();

//     // filter repos without homepage (no deployed webapp)
//     return data.filter((repo) => repo.homepage !== '' && repo.homepage != null);
// };