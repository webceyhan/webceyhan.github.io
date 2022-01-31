<script setup>

defineProps({
    url: String
})

</script>

<template>
    <div class="bg-light bg-opacity-25 rounded-circle p-2 mb-3 w-75">
        <img class="img-fluid rounded-circle" :src="url" alt="avatar" />
    </div>
</template>