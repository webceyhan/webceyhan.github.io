import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', () => {
    // state
    const loading = ref(false);
    const profile = ref();

    // actions
    async function load() {
        loading.value = true;
        const { data } = await useFetch('/api/profile');
        profile.value = data.value;
        loading.value = false;
    }

    // init
    load();

    // public api
    return { load, loading, profile };
});
