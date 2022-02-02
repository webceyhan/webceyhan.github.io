<script setup>

import { useProfile } from '../store/profile';
import Loader from '../components/Loader.vue'
import Profile from '../components/Profile.vue';

const { profile, loading } = useProfile();

</script>

<template>
    <header>
        <div class="container text-center text-sm-start text-light p-md-5">
            <loader v-if="loading" />
            <profile v-else :profile="profile" />
        </div>
    </header>
</template>