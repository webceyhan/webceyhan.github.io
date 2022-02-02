import { fetchJson, IS_DEV } from '../utils';
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
        color: LANGUAGES[name].color,
        rate: (lines / lineSum) * 100,
    }));
};

export const getProfile = () =>
    IS_DEV ? fetchFile('profile.json') : fetchJson(API_USER_URL);

export const getRepositories = async (query = { sort: 'updated' }) => {
    // fetch data or use mock in DEV
    const repos = IS_DEV
        ? await fetchFile('repos.json')
        : await fetchJson(`${API_USER_URL}/repos`, query);

    // fetch languages per repository
    const reposWithLanguages = repos.map(async (repo) => {
        const languages = IS_DEV
            ? repo.languages // use as-is in DEV
            : await fetchJson(repo.languages_url);

        // normalize languages per repository
        return { ...repo, languages: normalizeRepoLanguages(languages) };
    });

    // return all promises as one
    return Promise.all(reposWithLanguages);
};
