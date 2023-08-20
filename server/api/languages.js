// import { readFileSync } from 'fs';
// import LANGUAGES from '../data/languages.json';

// export default defineEventHandler((event) => {
//     const query = getQuery(event);

//     if (query?.repo) {
//         return  getRepoLanguages(query.repo);
//     }

//     // return fetchWithCache(API_USER_URL + '/repos');

//     return LANGUAGES;
// });


// // HELPERS /////////////////////////////////////////////////////////////////////////////////////////

// const getRepoLanguages = async (repo) => {
//     let languages;

//     try {
//         const url = API_USER_URL + `/repos/${repo}/languages`;
//         languages = await fetchWithCache(url);
//     } catch (error) {
//         const path = `../data/${repo}-languages.json`;
//         languages = readFileSync(path);
//     }

//     return normalizeRepoLanguages(languages);
// };

// const normalizeRepoLanguages = (languages) => {
//     const entries = Object.entries(languages);

//     // count total lines of repository
//     const lineSum = entries.reduce((sum, [_, lines]) => sum + lines, 0);

//     // normalize languages structure
//     return entries.map(([name, lines]) => ({
//         name,
//         lines,
//         color: LANGUAGES[name]?.color,
//         rate: ((lines / lineSum) * 100).toFixed(1),
//     }));
// };