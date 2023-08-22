import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', () => {
    // state
    const languages = ref([]);
    const loading = ref(false);
    const selected = ref(null);

    // actions
    async function load() {
        loading.value = true;
        const { data } = await useFetch('/api/languages');
        languages.value = data.value;
        loading.value = false;
    }

    // init
    load();

    // public api
    return { load, languages, selected };
});
