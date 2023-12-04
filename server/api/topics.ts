import { CATEGORIES } from '../constants/topic';
import { Repo, Topic } from '../types/repo';

export default defineEventHandler(async (event) => {
    // try to get cached data
    const cache = await useCache<Topic[]>('topics');

    // return cached data if available
    if (cache.value) return cache.value;

    // fetch fresh data
    const repos = await $fetch<Repo[]>('/api/repos');
    const topics = collectTopics(repos);

    // save fresh data to cache
    cache.value = sortByRate(topics);

    return cache.value;
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const collectTopics = (repos: Repo[]): Topic[] => {
    const list = repos.reduce((acc, repo) => {
        repo.topics.forEach((name) => {
            acc[name] = acc[name] ?? { name, rate: 0 };
            acc[name].category = findCategory(name);
            acc[name].rate += 1;
        });

        return acc;
    }, {} as Record<string, Topic>);

    return Object.values(list);
};

const findCategory = (name: string): string => {
    return (
        Object.entries(CATEGORIES).find(([, list]) =>
            list.includes(name)
        )?.[0] ?? 'Other'
    );
};
