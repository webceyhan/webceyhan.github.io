import { API_USERNAME } from '../constants/github';
import { Profile } from '../types/profile';

const cache = useStorage('api-cache');

export default defineEventHandler(async (event) => {
    // try to get cached data
    const cachedProfile = await cache.getItem<Profile>('profile');

    // return cached data if available
    if (cachedProfile) return cachedProfile;

    // fetch fresh data
    const url = `/users/${API_USERNAME}`;
    const data = await fetchGithubApi(url);
    const profile = normalizeProfile(data);

    // save fresh data to cache
    await cache.setItem('profile', profile);

    return profile;
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const normalizeProfile = (data: any): Profile => {
    return {
        id: data.id,
        name: data.name,
        login: data.login,
        html_url: data.html_url,
        avatar_url: data.avatar_url,
        repos_url: data.repos_url,
        followers_url: data.followers_url,
        following_url: data.following_url,
        bio: data.bio,
        email: data.email,
        company: data.company,
        location: data.location,
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        public_gists: data.public_gists,
        created_at: data.created_at,
        updated_at: data.updated_at,
    };
};
