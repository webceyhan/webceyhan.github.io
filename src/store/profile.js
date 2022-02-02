import { computed, reactive } from 'vue';
import { getProfile } from '../api/github';

// define state
const state = reactive({
    preloaded: false,
    loading: false,
    profile: {},
});

// define getters & setters
const loading = computed(() => state.loading);
const profile = computed(() => state.profile);

// define actions
const load = async () => {
    state.loading = true;
    state.profile = await getProfile();
    state.loading = false;
    state.preloaded = true;
};

// public API
export function useProfile() {
    // preload oncce if needed
    if (!state.preloaded) load();

    return {
        load,
        loading,
        profile,
    };
}
