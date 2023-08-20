import { API_USERNAME } from '../constants/github';

export default defineEventHandler(async (event) => {
    return await fetchGithubApi(`/users/${API_USERNAME}`);
});
