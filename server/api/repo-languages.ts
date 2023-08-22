import { API_USERNAME } from '../constants/github';
import { COLORS } from '../constants/language';
import { Language } from '../types/repo';

type Data = Record<string, number>;

type LanguageCache = Record<string, Language[]>;

export default defineEventHandler(async (event) => {
    // get repository name from query
    const repo = getQuery(event).repo as string;

    // try to get cached data
    const cache = await useCache<LanguageCache>('languages');

    // return cached data if available
    if (cache.value && cache.value[repo]) {
        return cache.value[repo];
    }

    // fetch fresh data
    const url = `/repos/${API_USERNAME}/${repo}/languages`;
    const data = await fetchGithubApi<Data>(url);
    const languages = normalizeLanguages(data);

    // save fresh data to cache
     cache.value = { ...cache.value, [repo]: languages };

    return languages;
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const normalizeLanguages = (data: Data): Language[] => {
    const entries = Object.entries(data);

    // count total lines of repository
    const lineSum = entries.reduce((sum, [_, lines]) => sum + lines, 0);

    // normalize languages structure
    return entries.map(([name, lines]) => ({
        name,
        lines,
        rate: ((lines / lineSum) * 100).toFixed(1) as any,
        color: COLORS[name] ?? null,
    }));
};
