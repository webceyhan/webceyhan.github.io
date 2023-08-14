import { purgeExpiredCaches } from '@/cache';
import { fetchJson, IS_DEV } from '@/utils';
import LANGUAGES from './languages.json';

// define vars
const API_URL = 'https://api.github.com';
const API_USER_ID = import.meta.env.VITE_USER_GITHUB;
const API_USER_URL = `${API_URL}/users/${API_USER_ID}`;

// helpers
const fetchFile = async (path) => fetchJson(new URL(path, import.meta.url));

const normalizeRepoLanguages = (languages) => {
    // summarize total lines of languages in single repo
    const lineSum = Object.values(languages).reduce((sum, v) => sum + v, 0);

    return Object.entries(languages).map(([name, lines]) => ({
        name,
        lines,
        color: LANGUAGES[name]?.color,
        rate: (lines / lineSum) * 100,
    }));
};

export const getProfile = () =>
    IS_DEV ? fetchFile('profile.json') : fetchJson(API_USER_URL);

export const getRepositories = async (query = { sort: 'updated' }) => {
    // purge cache if modified since last cached request
    // purgeCacheIfModified(`${API_USER_URL}/repos`);

    // fetch data or use mock in DEV
    const repos = IS_DEV
        ? await fetchFile('repos.json')
        : await fetchJson(`${API_USER_URL}/repos`, query);

    // fetch languages per repository
    const reposWithLanguages = repos.map(async (repo) => {
        // define default language as fallback
        let languages = { [repo.language]: 1 };

        try {
            languages = IS_DEV
                ? repo.languages // use as-is in DEV
                : await fetchJson(repo.languages_url);
        } catch (e) {}

        // normalize languages per repository
        return { ...repo, languages: normalizeRepoLanguages(languages) };
    });

    // return all promises as one
    return Promise.all(reposWithLanguages);
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
