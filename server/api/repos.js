import { readFileSync } from 'fs';
import { API_USERNAME } from '../constants/github';
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

const getRepos = async () => {
    try {
    return fetchGithubApi(`/users/${API_USERNAME}/repos`, {
        query: {
            per_page: 100,
            sort: 'updated',
        },
    });
    } catch (error) {
        return REPOS;
    }
};

const getRepoLanguages = async (repo) => {
    let languages;

    try {
        const url = `/repos/${API_USERNAME}/${repo}/languages`;
        languages = await fetchGithubApi(url);
    } catch (error) {
        const path = `../data/${repo}-languages.json`;
        languages = readFileSync(path);
    }

    return normalizeRepoLanguages(languages);
};

const normalizeRepoLanguages = (languages) => {
    const entries = Object.entries(languages);

    // count total lines of repository
    const lineSum = entries.reduce((sum, [_, lines]) => sum + lines, 0);

    // normalize languages structure
    return entries.map(([name, lines]) => ({
        name,
        lines,
        color: LANGUAGES[name]?.color,
        rate: ((lines / lineSum) * 100).toFixed(1),
    }));
};
