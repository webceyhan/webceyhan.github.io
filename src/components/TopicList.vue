<script setup>

defineProps({
    topics: Array
})

</script>

<template>
    <div>
        <small
            class="badge rounded-pill bg-dark bg-opacity-50 text-muted me-2"
            v-for="(topic, i) in topics"
            :key="i"
        >{{ topic }}</small>
    </div>
</template>