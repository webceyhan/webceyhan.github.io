import { API_USERNAME } from '../constants/github';
import { Profile } from '../types/profile';

export default defineEventHandler(async (event) => {
    // try to get cached data
    const cache = await useCache<Profile>('profile');

    // return cached data if available
    if (cache.value) return cache.value;

    // fetch fresh data
    const url = `/users/${API_USERNAME}`;
    const data = await fetchGithubApi(url);

    // save fresh data to cache
    cache.value = normalizeProfile(data);

    return cache.value;
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
