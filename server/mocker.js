/**
 * This is a server side script to generate mock data, it's not part of the app,
 * It's only used to generate mock data for the DEV environment!
 *
 * Github has a rate limit of 60 requests per hour for unauthenticated requests,
 * so we need to use a personal access token to increase the limit to 5000 requests per hour.
 */

import {
    readFileSync,
    writeFileSync,
    existsSync,
    mkdirSync,
    rmSync,
} from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// load env vars
dotenv.config();

const API_URL = 'https://api.github.com';
const API_TOKEN = process.env.GITHUB_API_TOKEN;
const API_USERNAME = process.env.GITHUB_API_USERNAME;

// __dirname is not available in ES6 modules
// https://stackoverflow.com/questions/46745014/using-dirname-in-es6-modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const MOCKS_DIR = __dirname + '/mocks';

// GENERATORS //////////////////////////////////////////////////////////////////////////////////////

const generateProfile = async () => {
    console.log('generating profile');

    const data = await fetchApi(`/users/${API_USERNAME}`);
    writeMockFile('profile', data);
};

const generateRepos = async () => {
    console.log('generating repos');

    const data = await fetchApi(`/users/${API_USERNAME}/repos`, {
        per_page: 100,
        sort: 'updated',
    });

    writeMockFile('repos', data);
};

const generateRepoLanguages = async () => {
    console.log('generating repo languages');

    const repos = readMockFile('repos');

    repos.forEach(async ({ name }) => {
        const data = await fetchApi(`/repos/${API_USERNAME}/${name}/languages`);
        writeMockFile(`${name}-languages`, data);
    });
};

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const fetchApi = async (path, query = {}) => {
    // create url object
    const url = new URL(API_URL + path);

    // add query params
    Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    const response = await fetch(url, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
    });

    return await response.json();
};

const readMockFile = (name) => {
    const filename = `${MOCKS_DIR}/${name}.json`;
    const jsonData = readFileSync(filename);

    return JSON.parse(jsonData);
};

const writeMockFile = (name, data) => {
    const filename = `${MOCKS_DIR}/${name}.json`;
    const jsonData = JSON.stringify(data, null, 2);

    writeFileSync(filename, jsonData);
};

const ensureMocksDir = () => {
    existsSync(MOCKS_DIR) || mkdirSync(MOCKS_DIR);
};

const purgeMocksDir = () => {
    existsSync(MOCKS_DIR) && rmSync(MOCKS_DIR, { recursive: true });
};

// RUN /////////////////////////////////////////////////////////////////////////////////////////////

purgeMocksDir();
ensureMocksDir();

await generateProfile();
await generateRepos();
await generateRepoLanguages();
