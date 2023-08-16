import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getRepositories } from '@/api/github';

export const useTopicStore = defineStore('topic', () => {
    // state
    const topics = ref([]);
    const loading = ref(false);
    const selected = ref(null);

    // actions
    async function load() {
        loading.value = true;
        topics.value = await getTopics();
        loading.value = false;
    };

    // init
    load();

    // expose
    return { load, topics, selected };
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const getTopics = async () => {
    const repos = await getRepositories();
    const topics = collectTopics(repos);
    return sortByRate(topics);
};

const collectTopics = (repos) => {
    const list = repos.reduce((acc, repo) => {
        repo.topics.forEach((name) => {
            acc[name] = acc[name] ?? { name, rate: 0 };
            acc[name].rate += 1;
        });
        return acc;
    }, {});

    return Object.values(list);
};

const sortByRate = (topics) => topics.sort((a, b) => b.rate - a.rate);
