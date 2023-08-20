import { API_USERNAME } from '../constants/github';
import PROFILE from '../data/profile.json';

export default defineEventHandler(async (event) => {
    try {
        return await fetchGithubApi(`/users/${API_USERNAME}`);
    } catch (error) {
        return PROFILE;
    }
});
