import { API_USERNAME } from '../constants/github';
import { Profile } from '../types/profile';

let cachedProfile: Profile;

export default defineEventHandler(async (event) => {
    // try to fetch fresh data if available or null
    const data = await fetchGithubApi(`/users/${API_USERNAME}`);

    if (data) {
        // process and save fresh data
        cachedProfile = normalizeProfile(data);
    }

    return cachedProfile;
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
