<script setup>

import { computed, ref } from 'vue';
import Repository from './Repository.vue'

const props = defineProps({
    repos: Array
})

const selectedFilter = ref(null);

const filters = computed(() => {
    return props.repos.reduce((all, { topics }) => new Set([...all, ...topics]), [])
})

const filteredRepos = computed(() => {
    return !selectedFilter.value
        ? props.repos
        : props.repos.filter(({ topics }) => topics.some(topic => topic === selectedFilter.value))
})

function onToggleFilter(filter) {
    if (selectedFilter.value === filter) {
        selectedFilter.value = null;
    }
    else {
        selectedFilter.value = filter;
    }
}

</script>

<template>
    <h1 class="display-4">Projects</h1>

    <nav class="nav">
        <a
            v-for="(filter, i) in filters"
            :key="i"
            href="#"
            @click.prevent="onToggleFilter(filter)"
            class="nav-link link-primary badge rounded-pill bg-dark me-1 mb-1"
            :class="{ 'text-light': filter === selectedFilter }"
        >{{ filter }}</a>
    </nav>

    <hr class="bg-white mb-4" />

    <ul class="list-group list-group-flush">
        <repository v-for="repo in filteredRepos" :key="repo.id" :repo="repo" />
    </ul>
</template>