import { computed, reactive } from 'vue';
import { getRepositories } from '../api/github';

// define state
const state = reactive({
    preloaded: false,
    loading: false,
    repositories: [],
    selectedTopic: null,
    selectedLanguae: null,
});

// define getters & setters
const loading = computed(() => state.loading);

const topics = computed(() =>
    Array.from(
        state.repositories.reduce(
            (all, { topics }) => new Set([...all, ...topics]),
            []
        )
    )
);

const languages = computed(() => {
    const all = {};

    // populate key-based unique list
    state.repositories.forEach(({ languages }) => {
        languages.forEach((lang) => {
            all[lang.name] = lang;
        });
    });

    // return as array
    return Object.values(all);
});

const selectedTopic = computed({
    get: () => state.selectedTopic,
    set: (v) => (state.selectedTopic = v),
});

const selectedLanguage = computed({
    get: () => state.selectedLanguae,
    set: (v) => (state.selectedLanguae = v),
});

const repositories = computed(() => {
    // get repositories;
    let repos = state.repositories;

    // filter by language
    if (selectedLanguage.value) {
        repos = repos.filter((repo) =>
            repo.languages.some(({ name }) => name === selectedLanguage.value)
        );
    }

    // filter by topics
    if (selectedTopic.value) {
        repos = repos.filter((repo) =>
            repo.topics.includes(selectedTopic.value)
        );
    }

    return repos;
});

// define actions
const load = async () => {
    state.loading = true;
    state.repositories = await getRepositories();
    state.loading = false;
    state.preloaded = true;
};

// public API
export function useRepository() {
    // preload oncce if needed
    if (!state.preloaded) load();

    return {
        load,
        loading,
        topics,
        languages,
        repositories,
        selectedTopic,
        selectedLanguage,
    };
}
