import { API_USERNAME } from '../constants/github';
import { COLORS } from '../constants/language';
import { Language, Repo } from '../types/repo';

export default defineEventHandler(async (event) => {
    // try to get cached data
    const cache = await useCache<Repo[]>('repos');

    // return cached data if available
    if (cache.value) return cache.value;

    // fetch fresh data
    const url = `/users/${API_USERNAME}/repos`;
    const query = { per_page: 100, sort: 'pushed' };
    const data = await fetchGithubApi<any[]>(url, query);

    // save fresh data to cache
    cache.value = (await Promise.all(data.map(normalizeRepo))) as Repo[];

    return cache.value;
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const normalizeRepo = async (data: any): Promise<Repo> => {
    return {
        id: data.id,
        name: data.name,
        description: data.description,
        language: data.language,
        homepage: data.homepage,
        html_url: data.html_url,
        forks: data.forks,
        watchers: data.watchers,
        open_issues: data.open_issues,
        topics: data.topics,
        languages: await getLanguages(data.name),
        created_at: data.created_at,
        updated_at: data.updated_at,
        pushed_at: data.pushed_at,
    };
};

type LanguageData = Record<string, number>;

export const getLanguages = async (repo: string) => {
    const url = `/repos/${API_USERNAME}/${repo}/languages`;
    const data = await fetchGithubApi<LanguageData>(url);

    return normalizeLanguages(data);
};

const normalizeLanguages = (data: LanguageData): Language[] => {
    const entries = Object.entries(data);

    // count total lines of repository
    const lineSum = entries.reduce((sum, [_, lines]) => sum + lines, 0);

    // normalize languages structure
    return entries.map(([name, lines]) => ({
        name,
        lines,
        rate: calculateRate(lines, lineSum),
        color: COLORS[name] ?? null,
    }));
};
