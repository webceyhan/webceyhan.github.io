<script setup>

import { ref, onMounted } from 'vue';
import { createGithubAPI } from './api/github';
import Avatar from './components/Avatar.vue'
import RepositoryList from './components/RepositoryList.vue'
import SocialLinkNav from './components/SocialLinkNav.vue'

const api = createGithubAPI();

const profile = ref({});
const repos = ref([]);
const socialLinks = ref([]);

onMounted(async () => {
    // load api sources
    profile.value = await api.getProfile();
    repos.value = await api.getRepositories();
    socialLinks.value = await api.getSocialLinks();
});

</script>

<template>
    <!-- Header -->
    <header class="py-5 px-md-5">
        <div class="container text-center text-sm-start text-light p-md-5">
            <div class="row align-items-center">
                <div class="col-md-4 d-flex justify-content-center">
                    <avatar :url="profile.avatar_url" />
                </div>

                <div class="col-md-8">
                    <h1 class="display-5 text-light text-opacity-50">Hi, I am</h1>

                    <h1 class="display-1 mb-3">{{ profile.name }}</h1>

                    <h4 class="text-light text-opacity-50">
                        I'm a {{ profile.location }} based
                        <span
                            class="text-nowrap text-warning"
                        >Full Stack Web Developer</span>
                        at
                        <img
                            src="./assets/logo.png"
                            class="img-fluid w-25"
                        />
                    </h4>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Section -->
    <main class="py-5 px-md-5">
        <div class="container text-muted px-md-5">
            <repository-list :repos="repos" />
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-5 px-md-5">
        <div class="container">
            <social-link-nav :links="socialLinks" />
        </div>
    </footer>
</template>

<style>
</style>
