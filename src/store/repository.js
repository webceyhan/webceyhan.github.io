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
    let lineSum = 0;

    // populate key-based unique list
    state.repositories.forEach(({ languages }) => {
        languages.forEach(({ name, lines, color }) => {
            // sum lines if exists or add new
            if (all[name]) all[name].lines += lines;
            else all[name] = { name, lines, color };

            // sum total lines
            lineSum += lines;
        });
    });

    // return as array
    return Object.values(all)
        .map((lang) => ({
            ...lang,
            // calculate line rate
            rate: (lang.lines / lineSum) * 100,
        }))
        // sort from more to less line rate
        .sort((a, b) => (a.rate < b.rate ? 1 : a.rate > b.rate ? -1 : 0));
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
