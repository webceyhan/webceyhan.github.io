import { Language } from '../types/repo';
import { API_USERNAME } from '../constants/github';
import { COLORS } from '../constants/language';

type Data = Record<string, number>;

const cachedLanguages: Record<string, Language[]> = {};

export default defineEventHandler(async (event) => {
    const repo = getQuery(event).repo as string;
    const url = `/repos/${API_USERNAME}/${repo}/languages`;

    // try to fetch fresh data if available or null
    const data = await fetchGithubApi<Data>(url);

    if (data) {
        // process and save fresh data
        cachedLanguages[repo] = normalizeLanguages(data);
    }

    return cachedLanguages[repo];
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
        rate: ((lines / lineSum) * 100).toFixed(1),
        color: COLORS[name] ?? null,
    }));
};
