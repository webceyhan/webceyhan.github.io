<script setup>

import Repository from './Repository.vue'

defineProps({
    repos: Array
})

</script>

<template>
    <h1 class="display-4">Projects</h1>
    <hr class="bg-white mb-4" />

    <ul class="list-group list-group-flush">
        <repository v-for="repo in repos" :key="repo.id" :repo="repo" />
    </ul>
</template>