// define vars
const IS_DEV = import.meta.env.DEV;
const BASE_URL = 'https://api.github.com';
const PROFILE_URL = `${BASE_URL}/users/webceyhan`;

const fetchFile = async (path) =>
    (await fetch(new URL(path, import.meta.url))).json();

export const getSocialLinks = () => fetchFile('links.json');

export const getProfile = async () => {
    // return mock-data in DEV
    if (IS_DEV) return fetchFile('profile.json');

    // fetch and return json
    return (await fetch(PROFILE_URL)).json();
};

export const getRepositories = async (query = {}) => {
    // return mock-data in DEV
    if (IS_DEV) return fetchFile('repos.json');

    // create url with given query params
    const url = new URL(`${PROFILE_URL}/repos`);
    url.search = new URLSearchParams(query);

    // fetch and return json
    return (await fetch(url)).json();
};

// export const getRepositories = async () => {
//     const url = `${GITHUB_URL}/repos`;

//     const data = await (await fetch(url)).json();

//     // filter repos without homepage (no deployed webapp)
//     return data.filter((repo) => repo.homepage !== '' && repo.homepage != null);
// };
