<script setup>

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: String,
    topics: Array
})

const onToggle = (topic) => {
    const active = props.modelValue === topic;
    emit('update:modelValue', active ? null : topic);
}

</script>

<template>
    <nav class="nav">
        <a
            v-for="(topic, i) in topics"
            :key="i"
            href="#"
            @click.prevent="onToggle(topic)"
            class="nav-link link-primary badge rounded-pill bg-dark bg-opacity-50 me-1 mb-1"
            :class="{ 'text-light': topic === modelValue }"
        >{{ topic }}</a>
    </nav>
</template>