<script setup>

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: String,
    languages: Array
});

const onToggle = (name) => {
    const active = props.modelValue === name;
    emit('update:modelValue', active ? null : name);
};

</script>

<template>
    <nav class="nav">
        <a
            v-for="({ name, rate, color }, i) in languages"
            :key="name"
            href="#"
            @click.prevent="onToggle(name)"
            class="nav-link badge bg-transparent link-primary border border-dark me-1 mb-1"
            :class="{ 'text-light': name === modelValue }"
        >{{ name }}</a>
    </nav>
</template>