import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getRepositories } from '@/api/github';

export const useLanguageStore = defineStore('language', () => {
    // state
    const languages = ref([]);
    const loading = ref(false);
    const selected = ref(null);

    // actions
    async function load() {
        loading.value = true;
        languages.value = await getLanguages();
        loading.value = false;
    }

    // init
    load();

    // public api
    return { load, languages, selected };
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const getLanguages = async () => {
    const repos = await getRepositories();
    const languages = collectLanguages(repos);
    return sortByRate(languages);
};

const collectLanguages = (repos) => {
    let lineSum = 0;

    // populate key-based unique list
    const list = repos.reduce((acc, repo) => {
        repo.languages.forEach(({ name, lines, color }) => {
            acc[name] = acc[name] ?? { name, lines, color };
            acc[name].lines += lines;
            lineSum += lines;
        });

        return acc;
    }, {});

    // add rate to each language
    return Object.values(list).map((language) => ({
        ...language,
        rate: (language.lines / lineSum) * 100,
    }));
};

const sortByRate = (languages) => languages.sort((a, b) => b.rate - a.rate);
