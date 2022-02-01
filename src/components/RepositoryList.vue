<script setup>

import { computed, ref } from 'vue';
import Repository from './Repository.vue'
import TopicFilterNav from './TopicFilterNav.vue';

const props = defineProps({
    repos: Array
});

const selectedFilter = ref(null);

const filters = computed(() => {
    return Array.from(props.repos.reduce((all,
        { topics }) => new Set([...all, ...topics]), [])
    );
});

const filteredRepos = computed(() => {
    return !selectedFilter.value
        ? props.repos
        : props.repos.filter(({ topics }) => topics.some(topic => topic === selectedFilter.value))
});

</script>

<template>
    <h1 class="display-4 text-center text-md-start">
        <i class="bi bi-github"></i>
        Projects
    </h1>

    <hr class="bg-secondary mb-3" />

    <div class="row">
        <div class="col-12 col-lg-3 mb-3">
            <topic-filter-nav
                class="justify-content-center justify-content-md-start"
                :topics="filters"
                v-model="selectedFilter"
            />
        </div>

        <div class="col-12 col-lg-8 offset-lg-1">
            <transition-group name="list" tag="ul" class="list-group list-group-flush">
                <repository v-for="repo in filteredRepos" :key="repo.id" :repo="repo" />
            </transition-group>
        </div>
    </div>
</template>

<style>
.list-enter-active {
    transition: all 300ms ease;
}
.list-leave-active {
    transition: all 200ms ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
</style>