export const API_URL: string = 'https://api.github.com';

export const API_TOKEN = process.env.GITHUB_API_TOKEN as string;

export const API_USERNAME = process.env.GITHUB_API_USERNAME as string;

export const API_HEADERS = { Authorization: `Bearer ${API_TOKEN}` };
