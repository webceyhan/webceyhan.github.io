<script setup>
import { timestamp } from "../utils";
import TopicList from "./TopicList.vue";
import LanguageList from "./LanguageList.vue";

defineProps({
  repo: Object,
});
</script>

<template>
  <li
    class="repo-list list-group-item list-group-item-action bg-dark border border-dark border-opacity-75 mb-2 py-4 rounded-2"
  >
    <div class="d-flex w-100 justify-content-between align-items-center">
      <i class="d-none d-xl-block bi bi-git display-2 ms-4 me-5"></i>

      <div class="flex-fill d-grid gap-1">
        <div class="w-100 d-flex justify-content-between">
          <div class="w-100 d-flex align-items-center gap-2">
            <a class="text-decoration-none h5 mb-1" :href="repo.html_url" target="__blank">
              {{ repo.name }}
            </a>

            <a
              v-if="repo.homepage"
              class="text-decoration-none btn badge btn-dark rounded-pill opacity-75"
              :href="repo.homepage"
              target="__blank"
            >
              DEMO
            </a>
          </div>

          <small class="d-none d-md-block">
            {{ timestamp(repo.created_at) }}
          </small>
        </div>

        <p class="text-light mb-1">{{ repo.description }}</p>

        <language-list :languages="repo.languages" />

        <topic-list :topics="repo.topics" />
      </div>
    </div>
  </li>
</template>

<style>
.repo-list {
  opacity: 0.8;
  --bs-bg-opacity: 0.4 !important;
}

.repo-list:hover {
  opacity: 1;
  --bs-bg-opacity: 0.6 !important;
  --bs-border-opacity: 2 !important;
  transition: opacity 500ms ease;
}

.repo-list .badge,
.repo-list .progress {
  filter: grayscale(1);
  transition: filter 1s ease;
}

.repo-list:hover .badge,
.repo-list:hover .progress {
  filter: grayscale(0);
}
</style>
