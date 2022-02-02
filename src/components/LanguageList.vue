<script setup>

defineProps({
    languages: Array
});

</script>

<template>
    <div class="mb-2">
        <small
            v-for="({ name, rate, color }, i) in languages"
            class="badge bg-transparent border border-dark me-2"
            :style="{ color, opacity: 0.5 }"
            :key="name"
        >{{ name }}</small>
    </div>

    <div class="progress" style="height: 3px; opacity: 0.5;">
        <div
            v-for="({ name, rate, color }, i) in languages"
            class="progress-bar small"
            :style="{ width: `${rate}%`, backgroundColor: color }"
        ></div>
    </div>
</template>