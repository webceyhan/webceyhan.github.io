import { computed, ref } from 'vue';
import { getProfile } from '../api/github';

// define states
let preloaded = false;
const loading = ref(false);
const profile = ref({});

// define actions
const load = async () => {
    loading.value = true;
    profile.value = await getProfile();
    loading.value = false;
    preloaded = true;
};

// public API
export function useProfile() {
    // preload oncce if needed
    if (!preloaded) load();

    return {
        load,
        loading: computed(() => loading.value),
        profile: computed(() => profile.value),
    };
}
