<script setup>
import ProgressBar from './ProgressBar.vue';

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
    <div>
        <h5 class="mb-2">Languages</h5>

        <progress-bar class="mb-2" :items="languages" />

        <nav class="nav">
            <a
                v-for="({ name, rate, color }, i) in languages"
                :key="name"
                href="#"
                @click.prevent="onToggle(name)"
                class="nav-link badge bg-transparent link-primary border border-dark me-1 mb-1"
                :class="{ 'text-light': name === modelValue }"
            >
                <i class="bi bi-box me-1" :style="{ color }"></i>
                {{ name }}
            </a>
        </nav>
    </div>
</template>