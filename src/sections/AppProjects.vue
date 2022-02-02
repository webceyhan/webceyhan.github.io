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
            <div v-else class="row">
                <div class="col-12 col-lg-3 mb-3">
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

                <div class="col-12 col-lg-8 offset-lg-1">
                    <repository-list :repos="repositories" />
                </div>
            </div>
        </div>
    </main>
</template>
