import { defineStore } from 'pinia';
import { Language } from '@/server/types/repo';

export const useLanguageStore = defineStore('language', () => {
    // state
    const languages = ref<Language[]>([]);
    const loading = ref(false);
    const selected = ref<string | null>(null);

    // actions
    async function load() {
        loading.value = true;
        const { data } = await useFetch('/api/languages');
        languages.value = data.value as Language[];
        console.log(languages.value);
        loading.value = false;
    }

    // init
    load();

    // public api
    return { load, languages, selected };
});
