// define vars
const IS_DEV = import.meta.env.DEV;
const BASE_URL = 'https://api.github.com';
const PROFILE_URL = `${BASE_URL}/users/webceyhan`;

export const getProfile = async () => {
    // create url
    let url = new URL(PROFILE_URL);

    // change url to mock-data url in DEV
    if (IS_DEV) url = new URL('profile.json', import.meta.url);

    return (await fetch(url)).json();
};

export const getRepositories = async (query = {}) => {
    // create url with given query params
    let url = new URL(`${PROFILE_URL}/repos`);
    url.search = new URLSearchParams(query);

    // change url to mock-data url in DEV
    if (IS_DEV) url = new URL('repos.json', import.meta.url);

    return (await fetch(url)).json();
};

// export const getRepositories = async () => {
//     const url = `${GITHUB_URL}/repos`;

//     const data = await (await fetch(url)).json();

//     // filter repos without homepage (no deployed webapp)
//     return data.filter((repo) => repo.homepage !== '' && repo.homepage != null);
// };
