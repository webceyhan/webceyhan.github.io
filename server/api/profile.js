import DATA from '../mocks/profile.json';

export default defineEventHandler((event) => {
    return { ...DATA };
});
