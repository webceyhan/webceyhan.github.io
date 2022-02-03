<script setup>

import ProgressBar from './ProgressBar.vue';

defineProps({
    languages: Array
});

</script>

<template>
    <div class="mb-2">
        <small
            v-for="({ name, rate, color }, i) in languages"
            class="badge bg-transparent border border-dark me-2"
            :style="{ color }"
            :key="name"
        >{{ name }}</small>
    </div>

    <progress-bar :items="languages" style="height: 3px" />
</template>