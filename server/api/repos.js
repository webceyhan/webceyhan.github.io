import { readFileSync } from 'fs';
import REPOS from '../data/repos.json';
import LANGUAGES from '../data/languages.json';

export default defineEventHandler((event) => {
    // fetch languages per repository
    const reposWithLanguages = REPOS.map(async (repo) => {
        let languages;

        try {
            // try fetching languages per repository
            languages = await getRepoLanguages(repo.name);
        } catch (e) {
            // use default language as fallback if failed
            languages = normalizeRepoLanguages({ [repo.language]: 1 });
        }

        // normalize languages per repository
        return { ...repo, languages };
    });

    // return all promises as one
    return Promise.all(reposWithLanguages);
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const getRepoLanguages = async (repo) => {
    const path = `../data/${repo}-languages.json`;
    const languages = readFileSync(path);

    console.log('languages', languages);

    return normalizeRepoLanguages(languages);
};

const normalizeRepoLanguages = (languages) => {
    // summarize total lines of languages in single repo
    const lineSum = Object.values(languages).reduce((sum, v) => sum + v, 0);

    return Object.entries(languages).map(([name, lines]) => ({
        name,
        lines,
        color: LANGUAGES[name]?.color,
        rate: ((lines / lineSum) * 100).toFixed(1),
    }));
};
