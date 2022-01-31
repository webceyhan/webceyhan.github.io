<script setup>

import { timestamp } from '../api/github';

defineProps({
    repo: Object
})

</script>

<template>
    <li class="list-group-item bg-transparent border-secondary py-4">
        <div class="d-flex w-100 justify-content-between align-items-center">
            <i class="d-none d-md-block bi bi-git display-1 me-5 text-white text-opacity-50"></i>

            <div class="flex-fill">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">
                        <a
                            class="text-decoration-none"
                            :href="repo.homepage"
                            target="__blank"
                        >{{ repo.name }}</a>
                    </h5>
                    <small class="d-none d-md-block">{{ timestamp(repo.created_at) }}</small>
                </div>
                <p class="text-light mb-1">{{ repo.description }}</p>
                <small
                    class="badge rounded-pill bg-dark text-muted me-2"
                    v-for="(topic, i) in repo.topics"
                    :key="i"
                >{{ topic }}</small>
            </div>
        </div>
    </li>
</template>