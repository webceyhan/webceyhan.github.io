<script setup>import { ref } from 'vue';

// GITHUP API //////////////////////////////////////////////////////////////////////////////////////

const GITHUB_URL = 'https://api.github.com/users/webceyhan';

// const async getProfile = () => {
//     return await fetch(GITHUB_URL);
// }

async function getRepositories() {
    // const url = '/data/repos.json';
    const url = `${GITHUB_URL}/repos`;

    const data = await (await fetch(url)).json();

    // filter repos without homepage (no deployed webapp)
    return data.filter((repo) => repo.homepage !== '' && repo.homepage != null);
}

const timestamp = (date) => new Date(date).toLocaleDateString();

// VUE /////////////////////////////////////////////////////////////////////////////////////////////

const repos = ref([]);

const created = async () => {
    this.repos = await getRepositories();
}


</script>

<template>
    <!-- Header -->
    <header class="py-5 px-md-5">
        <div class="container text-center text-sm-start text-light p-md-5">
            <div class="row align-items-center">
                <div class="col-md-4 d-flex justify-content-center">
                    <div class="bg-light bg-opacity-25 rounded-circle p-2 mb-3 w-75">
                        <img
                            class="img-fluid rounded-circle"
                            src="https://avatars.githubusercontent.com/u/3739981?v=4"
                            alt="avatar"
                        />
                    </div>
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
                        <img src="src/logo.png" class="img-fluid w-25" />
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

            <ul class="list-group list-group-flush">
                <li
                    class="list-group-item bg-transparent border-secondary py-4"
                    v-for="repo in repos"
                    :key="repo.id"
                >
                    <div class="d-flex w-100 justify-content-between align-items-center">
                        <i
                            class="d-none d-md-block bi bi-git display-1 me-5 text-white text-opacity-50"
                        ></i>

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
            </ul>
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
