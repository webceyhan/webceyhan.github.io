/**
 * This is a server side script to generate mock data, it's not part of the app,
 * It's only used to generate mock data for the DEV environment!
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// load env vars
dotenv.config();

// __dirname is not available in ES6 modules
// https://stackoverflow.com/questions/46745014/using-dirname-in-es6-modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const MOCKS_DIR = __dirname + '/mocks';

// define vars
const API_URL = 'https://api.github.com';
const API_USER_ID = process.env.VITE_USER_GITHUB;
const API_USER_URL = `${API_URL}/users/${API_USER_ID}`;

const readMockFile = (name) => {
    const filename = `${MOCKS_DIR}/${name}.json`;
    const jsonData = fs.readFileSync(filename);
    return JSON.parse(jsonData);
};

const writeMockFile = (name, data) => {
    const filename = `${MOCKS_DIR}/${name}.json`;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, jsonData);
};

const generateProfile = async () => {
    const response = await fetch(API_USER_URL);
    const data = await response.json();
    writeMockFile('profile', data);
};

const generateRepos = async () => {
    const response = await fetch(`${API_USER_URL}/repos`);
    const data = await response.json();
    writeMockFile('repos', data);
};

const generateLanguages = async () => {
    const repos = readMockFile('repos');
    repos.forEach(async ({ name, languages }) => {
        writeMockFile(`${name}-languages`, languages);
    });
};

// generate mock data
// await generateProfile();
// await generateRepos();
await generateLanguages();
