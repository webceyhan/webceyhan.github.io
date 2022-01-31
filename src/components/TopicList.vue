<script setup>

defineProps({
    topics: Array
})

</script>

<template>
    <div>
        <small
            class="badge rounded-pill bg-dark text-muted me-2"
            v-for="(topic, i) in topics"
            :key="i"
        >{{ topic }}</small>
    </div>
</template>