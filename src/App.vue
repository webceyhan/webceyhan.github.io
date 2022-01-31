<script setup>

import { ref, onMounted } from 'vue';
import { getRepositories } from './api/github';
import Avatar from './components/Avatar.vue'
import RepositoryList from './components/RepositoryList.vue'

const repos = ref([]);

onMounted(async () => {
    repos.value = await getRepositories();
})

</script>

<template>
    <!-- Header -->
    <header class="py-5 px-md-5">
        <div class="container text-center text-sm-start text-light p-md-5">
            <div class="row align-items-center">
                <div class="col-md-4 d-flex justify-content-center">
                    <avatar url="https://avatars.githubusercontent.com/u/3739981?v=4" />
                </div>

                <div class="col-md-8">
                    <h1 class="display-5 text-light text-opacity-50">Hi, I am</h1>

                    <h1 class="display-1 mb-3">Evren Ceyhan</h1>

                    <h4 class="text-light text-opacity-50">
                        I'm a Belgium based
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
    <main id="app" class="py-5 px-md-5">
        <div class="container text-muted px-md-5">
            <h1 class="display-4">Projects</h1>
            <hr class="bg-white mb-4" />

            <repository-list :repos="repos" />
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-5 px-md-5">
        <div class="container">
            <!-- Social Links -->
            <div class="nav justify-content-center h1">
                <a class="nav-link" target="__blank" href="https://github.com/webceyhan">
                    <i class="bi bi-github"></i>
                </a>

                <a class="nav-link" target="__blank" href="https://www.reddit.com/user/webceyhan">
                    <i class="bi bi-reddit"></i>
                </a>

                <a class="nav-link" target="__blank" href="https://www.linkedin.com/in/webceyhan">
                    <i class="bi bi-linkedin"></i>
                </a>

                <a class="nav-link" target="__blank" href="https://twitter.com/webceyhan">
                    <i class="bi bi-twitter"></i>
                </a>

                <a class="nav-link" target="__blank" href="https://www.instagram.com/webceyhan/">
                    <i class="bi bi-instagram"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<style>
</style>
