<script setup>

import { ref } from 'vue';
import Avatar from './Avatar.vue'

const showLogo = ref(true);

defineProps({
    profile: Object
})
</script>

<template>
    <div class="row align-items-center">
        <div class="col-md-4 d-flex justify-content-center">
            <avatar :url="profile.avatar_url" />
        </div>

        <div class="col-md-8">
            <!-- intro -->
            <h1 class="display-5 text-light text-opacity-50">Hi, I am</h1>
            <h1 class="display-1 mb-3">{{ profile.name }}</h1>

            <!-- description -->
            <h4 class="text-light text-opacity-50">
                I'm a {{ profile.location }} based
                <span
                    class="text-nowrap text-warning"
                >{{ profile.bio }}</span>
                at
                <img
                    v-if="showLogo"
                    src="../assets/company-logo.png"
                    class="img-fluid w-25"
                    @error="showLogo = false"
                />
                <span v-else class="text-nowrap">{{ profile.company }}</span>
            </h4>
        </div>
    </div>
</template>