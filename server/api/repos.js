import { API_USERNAME } from '../constants/github';
import LANGUAGES from '../constants/languages';

export default defineEventHandler(async (event) => {
    const repos = await getRepos();

    // fetch languages per repository
    const reposWithLanguages = repos.map(async (repo) => {
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
    const url = `/users/${API_USERNAME}/repos`;
    return fetchGithubApi(url, {
        per_page: 100,
        sort: 'updated',
    });
};

const getRepoLanguages = async (repo) => {
    const url = `/repos/${API_USERNAME}/${repo}/languages`;
    const languages = await fetchGithubApi(url);

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
