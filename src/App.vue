<script setup>

import { ref, onMounted } from 'vue';
import * as github from './api/github';
import { useSocial } from './store/social';
import RepositoryList from './components/RepositoryList.vue'
import SocialLinkNav from './components/SocialLinkNav.vue'
import Profile from './components/Profile.vue';
import { useProfile } from './store/profile';

// const profile = ref({});
const repos = ref([]);
const { profile } = useProfile();
const { links } = useSocial()

onMounted(async () => {
    // load api sources
    repos.value = await github.getRepositories();
});

</script>

<template>
    <!-- Header -->
    <header class="py-5 px-md-5">
        <div class="container text-center text-sm-start text-light p-md-5">
            <profile :profile="profile" />
        </div>
    </header>

    <!-- Main Section -->
    <main class="py-3 px-md-5">
        <div class="container text-muted px-md-5">
            <repository-list :repos="repos" />
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
