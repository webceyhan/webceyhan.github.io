<script setup>

import { useRepository } from '../store/repository';
import Loader from '../components/Loader.vue'
import TopicFilterNav from '../components/TopicFilterNav.vue';
import LanguageFilterNav from '../components/LanguageFilterNav.vue';
import RepositoryList from '../components/RepositoryList.vue'

const {
    loading,
    topics,
    languages,
    repositories,
    selectedTopic,
    selectedLanguage,
} = useRepository();

</script>

<template>
    <main>
        <div class="container text-muted px-md-5">
            <h1 class="display-4 text-center text-md-start">
                <i class="bi bi-github"></i>
                Projects
            </h1>

            <hr class="bg-secondary mb-3" />

            <loader v-if="loading" />
            <div v-else class="row g-lg-5">
                <div class="col-12 col-lg-4 mb-5">
                    <language-filter-nav
                        class="justify-content-center justify-content-md-start mb-2"
                        :languages="languages"
                        v-model="selectedLanguage"
                    />

                    <topic-filter-nav
                        class="justify-content-center justify-content-md-start"
                        :topics="topics"
                        v-model="selectedTopic"
                    />
                </div>

                <div class="col-12 col-lg-8">
                    <repository-list :repos="repositories" />
                </div>
            </div>
        </div>
    </main>
</template>
