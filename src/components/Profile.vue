<script setup>

import Avatar from './Avatar.vue'

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
                <img src="../assets/logo.png" class="img-fluid w-25" />
            </h4>
        </div>
    </div>
</template>