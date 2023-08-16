import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getProfile } from '@/api/github';

export const useProfileStore = defineStore('profile', () => {
    // state
    const loading = ref(false);
    const profile = ref();

    // actions
    async function load() {
        loading.value = true;
        profile.value = await getProfile();
        loading.value = false;
    }

    // init
    load();

    // public api
    return { load, loading, profile };
});
