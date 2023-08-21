import { API_USERNAME } from '../constants/github';
import { Repo } from '../types/repo';

let cachedRepos: Repo[] = [];

export default defineEventHandler(async (event) => {
    const url = `/users/${API_USERNAME}/repos`;
    const query = { per_page: 100, sort: 'updated' };
    const data = await fetchGithubApi<any[]>(url, query);

    if (data) {
        cachedRepos = await Promise.all(data.map(normalizeRepo));
    }

    return cachedRepos;
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const normalizeRepo = async (data: any): Promise<Repo> => {
    const languages = await $fetch('/api/repo-languages', {
        query: { repo: data.name },
    });

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
        languages: languages as any,
        created_at: data.created_at,
        updated_at: data.updated_at,
        pushed_at: data.pushed_at,
    };
};
