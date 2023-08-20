import { API_URL, API_USERNAME } from '../constants';
import PROFILE from '../data/profile.json';

export default defineEventHandler(async (event) => {
    try {
        const url = `${API_URL}/users/${API_USERNAME}`;
        return await fetchWithCache();
    } catch (error) {
        return PROFILE;
    }
});
