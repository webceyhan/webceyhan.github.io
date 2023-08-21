import { Repo, Topic } from '../types/repo';

export default defineEventHandler(async (event) => {
    // try to get cached data
    const cache = await useCache<Topic[]>('topics');

    // return cached data if available
    if (cache.value) return cache.value;

    // fetch fresh data
    const repos = await $fetch('/api/repos');
    const topics = collectTopics(repos);

    // save fresh data to cache
    cache.value = sortByRate(topics);

    return cache.value;
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const collectTopics = (repos: Repo[]) => {
    const list = repos.reduce((acc, repo) => {
        repo.topics.forEach((name) => {
            acc[name] = acc[name] ?? { name, rate: 0 };
            acc[name].rate += 1;
        });

        return acc;
    }, {} as Record<string, Topic>);

    return Object.values(list);
};
