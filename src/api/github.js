import { purgeExpiredCaches } from '@/cache';
import { fetchJson, IS_DEV } from '@/utils';
import LANGUAGES from './languages.json';

// define vars
const API_URL = 'https://api.github.com';
const API_USER_ID = import.meta.env.VITE_USER_GITHUB;
const API_USER_URL = `${API_URL}/users/${API_USER_ID}`;

// RESOURCES ///////////////////////////////////////////////////////////////////////////////////////

export async function getProfile() {
    return IS_DEV
        ? await fetchFile('mocks/profile.json')
        : await fetchJson(API_USER_URL);
}

export async function getRepositories(query = { sort: 'updated' }) {
    // purge cache if modified since last cached request
    // purgeCacheIfModified(`${API_USER_URL}/repos`);

    // fetch data or use mock in DEV
    const repos = IS_DEV
        ? await fetchFile('mocks/repos.json')
        : await fetchJson(`${API_USER_URL}/repos`, query);

    // fetch languages per repository
    const reposWithLanguages = repos.map(async (repo) => {
        let languages;

        try {
            // try fetching languages per repository
            languages = await getRepoLanguages(repo.name);
        } catch (e) {
            // use default language as fallback if failed
            languages = normalizeRepoLanguages({ [repo.language]: 1 });
        }

        // normalize languages per repository
        return { ...repo, languages };
    });

    // return all promises as one
    return Promise.all(reposWithLanguages);
}

export async function getRepoLanguages(repo) {
    const languages = IS_DEV
        ? await fetchFile(`mocks/${repo}-languages.json`)
        : await fetchJson(`${API_USER_URL}/${repo}/languages`);

    return normalizeRepoLanguages(languages);
}

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const fetchFile = async (path) => {
    const url = new URL(path, import.meta.url);
    return (await fetch(url)).json();
};

const normalizeRepoLanguages = (languages) => {
    // summarize total lines of languages in single repo
    const lineSum = Object.values(languages).reduce((sum, v) => sum + v, 0);

    return Object.entries(languages).map(([name, lines]) => ({
        name,
        lines,
        color: LANGUAGES[name]?.color,
        rate: ((lines / lineSum) * 100).toFixed(1),
    }));
};

// export const purgeCacheIfModified = async (url) => {
//     // get etag from last cached request
//     const etag = localStorage.getItem('etag');

//     // check if cache is still fresh
//     const response = await fetch(url, {
//         headers: { 'If-None-Match': etag },
//     });

//     if (response.status === 304) {
//         return console.log('Cache is still fresh');
//     }

//     // purge cache
//     console.log('Cache is stale');

//     purgeExpiredCaches(true);

//     // update etag of the last cached request
//     localStorage.setItem('etag', response.headers.get('etag'));
// };
