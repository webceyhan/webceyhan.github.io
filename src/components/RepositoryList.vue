<script setup>

import Repository from './Repository.vue'

defineProps({
    repos: Array
})

</script>

<template>
    <ul class="list-group list-group-flush">
        <repository v-for="repo in repos" :key="repo.id" :repo="repo" />
    </ul>
</template>