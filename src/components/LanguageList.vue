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
            :style="{ color }"
            :key="name"
        >{{ name }}</small>
    </div>

    <div class="progress" style="height: 3px">
        <div
            v-for="({ name, rate, color }, i) in languages"
            class="progress-bar small"
            :style="{ width: `${rate}%`, backgroundColor: color }"
        ></div>
    </div>
</template>