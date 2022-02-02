import { computed, ref } from 'vue';
import { getRepositories } from '../api/github';

// define states
let preloaded = false;
const loading = ref(false);
const repositories = ref([]);

// define actions
const load = async () => {
    loading.value = true;
    repositories.value = await getRepositories();
    loading.value = false;
    preloaded = true;
};

// public API
export function useRepository() {
    // preload oncce if needed
    if (!preloaded) load();

    return {
        load,
        loading: computed(() => loading.value),
        repositories: computed(() => repositories.value),
        topics: computed(() =>
            Array.from(
                repositories.value.reduce(
                    (all, { topics }) => new Set([...all, ...topics]),
                    []
                )
            )
        ),
    };
}
