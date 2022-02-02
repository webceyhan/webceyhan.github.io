<script setup>

import { useSocial } from './store/social';
import { useProfile } from './store/profile';
import { useRepository } from './store/repository';
import RepositoryList from './components/RepositoryList.vue'
import SocialLinkNav from './components/SocialLinkNav.vue'
import Profile from './components/Profile.vue';

const { repositories, topics } = useRepository()
const { profile } = useProfile();
const { links } = useSocial()

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
            <repository-list :repos="repositories" :topics="topics" />
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
