import { fetchJson, IS_DEV } from '../utils';

// define vars
const API_URL = 'https://api.github.com';
const API_USER_ID = import.meta.env.VITE_USER_GITHUB;
const API_USER_URL = `${API_URL}/users/${API_USER_ID}`;

// helpers
const fetchFile = async (path) => fetchJson(new URL(path, import.meta.url));

export const getProfile = () =>
    IS_DEV ? fetchFile('profile.json') : fetchJson(API_USER_URL);

export const getRepositories = (query = { sort: 'updated' }) =>
    IS_DEV
        ? fetchFile('repos.json')
        : fetchJson(`${API_USER_URL}/repos`, query);
