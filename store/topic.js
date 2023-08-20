import { defineStore } from 'pinia';

export const useTopicStore = defineStore('topic', () => {
    // state
    const topics = ref([]);
    const loading = ref(false);
    const selected = ref(null);

    // getters
    const topicsByCategory = computed(() => {
        return Object.entries(TOPIC_CATEGORIES).map(
            ([category, topicNames]) => ({
                category,
                topics: topics.value.filter((topic) =>
                    topicNames.includes(topic.name)
                ),
            })
        );
    });

    // actions
    async function load() {
        loading.value = true;
        topics.value = await getTopics();
        loading.value = false;
    }

    // init
    load();

    // expose
    return {
        load,
        topics,
        topicsByCategory,
        selected,
    };
});

// HELPERS /////////////////////////////////////////////////////////////////////////////////////////

const getTopics = async () => {
    const { data } = await useFetch('/api/repos');
    const topics = collectTopics(data.value);
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

const TOPIC_CATEGORIES = {
    // Language: [
    //     'javascript',
    //     'typescript',
    //     'python',
    //     'ruby',
    //     'php',
    //     'html',
    //     'css',
    //     'sass',
    // ],
    Framework: [
        'vue',
        'react',
        'angular',
        'svelte',
        'nuxt',
        'next',
        'express',
        'laravel',
    ],
    Database: [
        'mysql',
        'mongodb',
        'postgresql',
        'redis',
        'sqlite',
        'firestore',
    ],
    Design: [
        'bootstrap',
        'tailwindcss',
        'material-ui',
        'chakra-ui',
        'radix-ui',
        'daisyui',
        'fontawesome',
        'bootstrap-icons',
    ],
    Deployment: [
        'aws',
        'digitalocean',
        'vercel',
        'netlify',
        'heroku',
        'firebase',
        'github-pages',
        'github-actions',
        'kubernetes',
        'docker',
    ],
    'Web Technologies': [
        'rest',
        'graphql',
        'web3',
        'websockets',
        'webassembly',
    ],
};
