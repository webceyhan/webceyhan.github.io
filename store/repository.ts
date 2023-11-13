import { defineStore } from 'pinia';
import { useTopicStore } from './topic';
import { useLanguageStore } from './language';
import type { Repo } from '~/server/types/repo';

export const useRepositoryStore = defineStore('repository', () => {
    // state
    const loading = ref(false);
    const _repositories = ref<Repo[]>([]);
    const topicStore = useTopicStore();
    const languageStore = useLanguageStore();

    // pagination states
    const page = ref(1);
    const perPage = ref(5);
    const total = computed(() => filteredRepositories.value.length);
    const hasMore = computed(() => total.value > page.value * perPage.value);
    const hasFilter = computed(
        () => !!languageStore.selected || !!topicStore.selected
    );

    // getters
    const filteredRepositories = computed(() => {
        let repos = _repositories.value;

        // filter by language
        if (languageStore.selected) {
            repos = repos.filter((repo) =>
                repo.languages.some(
                    (lang) => lang.name === languageStore.selected
                )
            );

            // reset page on filter
            page.value = 1;
        }

        // filter by topics
        if (topicStore.selected) {
            repos = repos.filter((repo) =>
                repo.topics.includes(topicStore.selected as any)
            );

            // reset page on filter
            page.value = 1;
        }

        return repos;
    });

    const repositories = computed(() =>
        filteredRepositories.value.slice(0, page.value * perPage.value)
    );

    //  actions
    async function load() {
        loading.value = true;
        const { data } = await useFetch('/api/repos');
        _repositories.value = data.value as Repo[];
        loading.value = false;
    }

    function loadMore() {
        page.value++;
    }

    // init
    load();

    // public api
    return {
        loadMore,
        loading,
        repositories,
        hasFilter,
        hasMore,
        total,
    };
});
