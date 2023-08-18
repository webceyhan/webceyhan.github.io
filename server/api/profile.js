import PROFILE from '../data/profile.json';

export default defineEventHandler((event) => {
    return { ...PROFILE };
});
