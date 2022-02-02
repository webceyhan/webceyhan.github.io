<script setup>

import { useSocial } from './store/social';
import { useProfile } from './store/profile';
import { useRepository } from './store/repository';
import Loader from './components/Loader.vue'
import Profile from './components/Profile.vue';
import TopicFilterNav from './components/TopicFilterNav.vue';
import RepositoryList from './components/RepositoryList.vue'
import SocialLinkNav from './components/SocialLinkNav.vue'

const {
    repositories,
    topics,
    selectedTopic,
    loading: repositoryLoading
} = useRepository();

const {
    profile,
    loading: profileLoading
} = useProfile();

const { links } = useSocial();

</script>

<template>
    <!-- Header -->
    <header class="py-5 px-md-5">
        <div class="container text-center text-sm-start text-light p-md-5">
            <loader v-if="profileLoading" />
            <profile v-else :profile="profile" />
        </div>
    </header>

    <!-- Main Section -->
    <main class="py-3 px-md-5">
        <div class="container text-muted px-md-5">
            <h1 class="display-4 text-center text-md-start">
                <i class="bi bi-github"></i>
                Projects
            </h1>

            <hr class="bg-secondary mb-3" />

            <loader v-if="repositoryLoading" />
            <div v-else class="row">
                <div class="col-12 col-lg-3 mb-3">
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

    <!-- Footer -->
    <footer class="py-5 px-md-5">
        <div class="container">
            <social-link-nav :links="links" />
        </div>
    </footer>
</template>

<style>
</style>
