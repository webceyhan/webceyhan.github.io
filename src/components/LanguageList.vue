<script setup>

import ProgressBar from './ProgressBar.vue';

defineProps({
    languages: Array
});

</script>

<template>
    <div class="mb-2">
        <small
            v-for="({ name, color }, i) in languages"
            class="badge bg-transparent border border-dark text-muted me-2"
            :key="name"
        >
            <i class="bi bi-box me-1" :style="{ color }"></i>
            {{ name }}
        </small>
    </div>

    <progress-bar :items="languages" style="height: 3px" />
</template>