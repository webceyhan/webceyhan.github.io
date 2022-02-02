<script setup>

defineProps({
    links: Array
})

</script>

<template>
    <div class="nav justify-content-center h1">
        <a v-for="(link, i) in links" :key="i" :href="link.url" class="nav-link" target="__blank">
            <i :class="`bi bi-${link.icon}`"></i>
        </a>
    </div>
</template>

<style scoped>
.nav-link {
    color: rgb(148 184 215);
}
.nav-link:hover {
    color: aliceblue;
}
</style>