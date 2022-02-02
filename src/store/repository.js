import { computed, reactive } from 'vue';
import { getRepositories } from '../api/github';

// define state
const state = reactive({
    loading: false,
    preloaded: false,
    repositories: [],
    topics: [],
    selectedTopic: null,
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

const selectedTopic = computed({
    get: () => state.selectedTopic,
    set: (v) => (state.selectedTopic = v),
});

const repositories = computed(() => {
    return !selectedTopic.value
        ? state.repositories
        : state.repositories.filter((repo) =>
              repo.topics.includes(selectedTopic.value)
          );
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
        repositories,
        topics,
        selectedTopic,
    };
}
