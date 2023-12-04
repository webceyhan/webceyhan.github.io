import { Language, Repo } from '../types/repo';

export default defineEventHandler(async (event) => {
    // try to get cached data
    const cache = await useCache<Language[]>('languages');

    // return cached data if available
    if (cache.value) return cache.value;

    // fetch fresh data
    const repos = await $fetch<Repo[]>('/api/repos');
    const languages = collectLanguages(repos);

    // save fresh data to cache
    cache.value = sortByRate(languages);

    return cache.value;
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const collectLanguages = (repos: Repo[]): Language[] => {
    let lineSum = 0;

    // populate key-based unique list
    const list = repos.reduce((acc, repo) => {
        repo.languages.forEach(({ name, lines, color }) => {
            acc[name] = acc[name] ?? { name, lines, color };
            acc[name].lines += lines;
            lineSum += lines;
        });

        return acc;
    }, {} as Record<string, Language>);

    // add rate to each language
    return Object.values(list).map((language) => ({
        ...language,
        rate: calculateRate(language.lines, lineSum),
    }));
};
