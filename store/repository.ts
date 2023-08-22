import { defineStore } from 'pinia';
import { useTopicStore } from './topic';
import { useLanguageStore } from './language';
import { Repo } from '@/server/types/repo';

export const useRepositoryStore = defineStore('repository', () => {
    // state
    const loading = ref(false);
    const _repositories = ref<Repo[]>([]);
    const topicStore = useTopicStore();
    const languageStore = useLanguageStore();

    // getters
    const repositories = computed(() => {
        let repos = _repositories.value;

        // filter by language
        if (languageStore.selected) {
            repos = repos.filter((repo) =>
                repo.languages.some(
                    (lang) => lang.name === languageStore.selected
                )
            );
        }

        // filter by topics
        if (topicStore.selected) {
            repos = repos.filter((repo) =>
                repo.topics.includes(topicStore.selected as any)
            );
        }

        return repos;
    });

    //  actions
    async function load() {
        loading.value = true;
        const { data } = await useFetch('/api/repos');
        _repositories.value = data.value as Repo[];
        loading.value = false;
    }

    // init
    load();

    // public api
    return { load, loading, repositories };
});
