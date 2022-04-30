<script setup>

import { timestamp } from '../utils';
import TopicList from './TopicList.vue'
import LanguageList from './LanguageList.vue';

defineProps({
    repo: Object
})

</script>

<template>
    <li
        class="repo-list list-group-item list-group-item-action bg-dark bg-opacity-25 border-5 py-4"
    >
        <div class="d-flex w-100 justify-content-between align-items-center">
            <i class="d-none d-md-block bi bi-git display-1 -text-muted me-5"></i>

            <div class="flex-fill">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-2">
                        <a
                            class="text-decoration-none"
                            :href="repo.html_url"
                            target="__blank"
                        >{{ repo.name }}</a>

                        <span v-if="repo.homepage">
                        <span class="px-2">|</span>
                        <a
                            class="text-decoration-none h6"
                            :href="repo.homepage"
                            target="__blank"
                        >DEMO</a>
                        </span>
                    </h5>
                    <small class="d-none d-md-block -text-muted">{{ timestamp(repo.created_at) }}</small>
                </div>
                <p class="text-light mb-1">{{ repo.description }}</p>
                <language-list :languages="repo.languages" />
                <topic-list :topics="repo.topics" class="mt-1" />
            </div>
        </div>
    </li>
</template>

<style >
.repo-list {
    border-color: black !important;
}

.repo-list .badge,
.repo-list .progress {
    filter: grayscale(1);
    transition: all 1s ease;
}
.repo-list:hover .badge,
.repo-list:hover .progress {
    filter: grayscale(0);
}
</style>