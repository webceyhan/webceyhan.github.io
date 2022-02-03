<script setup>

defineProps({
    items: Array,
});

</script>

<template>
    <div class="progress" style="height: 5px">
        <div
            v-for="({ rate, color }, i) in items"
            :key="i"
            class="progress-bar"
            :style="{ width: `${rate}%`, backgroundColor: color }"
        ></div>
    </div>
</template>