import { existsSync, mkdirSync, rmSync } from 'fs';

/**
 * This is a server side script to cache data.
 * It's only used to generate mock data for the DEV environment!
 *
 * Github has a rate limit of 60 requests per hour for unauthenticated requests,
 * so we need to use a personal access token to increase the limit to 5000 requests per hour.
 */

const API_URL = 'https://api.github.com';
const API_TOKEN = process.env.GITHUB_API_TOKEN;
const API_USERNAME = process.env.GITHUB_API_USERNAME;

const DIR = import.meta.dir;
const CACHE_DIR = `${DIR}/../cache`;

async function fetchApi<T>(path: string, query: any = {}): Promise<T> {
    // create url object
    const url = new URL(API_URL + path);

    // add query params
    Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value as any);
    });

    const response = await fetch(url, {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
    });

    return response.json() as Promise<T>;
}

function writeToCacheFile(path: string, data: any): void {
    const filename = `${CACHE_DIR}/${path}.json`;
    const jsonData = JSON.stringify(data, null, 4);

    console.log(`Writing to cache file: ${path}.json`);
    Bun.write(filename, jsonData);
}

// Create cache directory if it doesn't exist
existsSync(CACHE_DIR) || mkdirSync(CACHE_DIR);

// Purge existing cache directory
rmSync(`${CACHE_DIR}/*`, { force: true });

// Fetch and cache user profile
const profile = await fetchApi<any>(`/users/${API_USERNAME}`);
writeToCacheFile('profile', profile);

// Fetch and cache repositories
const repos = await fetchApi<any[]>(`/users/${API_USERNAME}/repos`, {
    per_page: 100,
    sort: 'updated',
});
writeToCacheFile('repos', repos);

// Fetch and cache languages for each repository
repos.forEach(({ name }) => {
    const data = fetchApi(`/repos/${API_USERNAME}/${name}/languages`);
    writeToCacheFile(`${name}-languages`, data);
});
