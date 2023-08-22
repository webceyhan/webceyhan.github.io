import { defineStore } from 'pinia';
import { CATEGORIES } from '@/server/constants/topic';

export const useTopicStore = defineStore('topic', () => {
    // state
    const topics = ref([]);
    const loading = ref(false);
    const selected = ref(null);
    // get categories without first 'Languages' category
    const categories = [...Object.keys(CATEGORIES), 'Other'].slice(1);

    // getters
    const topicsByCategory = computed(() => {
        return categories.map((category) => ({
            category,
            topics: topics.value.filter((topic) => topic.category === category),
        }));
    });

    // actions
    async function load() {
        loading.value = true;
        const { data } = await useFetch('/api/topics');
        topics.value = data.value;
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
