export const API_URL = 'https://api.github.com';

export const API_TOKEN = process.env.GITHUB_API_TOKEN;

export const API_USERNAME = process.env.GITHUB_API_USERNAME;

export const API_HEADERS = { Authorization: `Bearer ${API_TOKEN}` };
