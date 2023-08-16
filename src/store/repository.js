import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { getRepositories } from '@/api/github';
import { useTopicStore } from './topic';
import { useLanguageStore } from './language';

export const useRepositoryStore = defineStore('repository', () => {
    // state
    const loading = ref(false);
    const _repositories = ref([]);
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
                repo.topics.includes(topicStore.selected)
            );
        }

        return repos;
    });

    //  actions
    async function load() {
        loading.value = true;
        _repositories.value = await getRepositories();
        loading.value = false;
    }

    // init
    load();

    // public api
    return { load, loading, repositories };
});
