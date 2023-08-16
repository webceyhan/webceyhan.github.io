<script setup>
import { useTopicStore } from "@/store/topic";
import { useLanguageStore } from "@/store/language";
import { useRepositoryStore } from "@/store/repository";
import Loader from "@/components/Loader.vue";
import Heading from "@/components/Heading.vue";
import Divider from "@/components/Divider.vue";
import Drawer from "../components/Drawer.vue";
import Button from "@/components/Button.vue";
import Icon from "@/components/Icon.vue";
import TopicFilterNav from "./partials/TopicFilterNav.vue";
import LanguageFilterNav from "./partials/LanguageFilterNav.vue";
import RepositoryList from "./partials/RepositoryList.vue";

const topicStore = useTopicStore();
const languageStore = useLanguageStore();
const repositoryStore = useRepositoryStore();
</script>

<template>
  <main class="container mx-auto px-3">
    <Heading class="max-md:text-center" large>
      <Icon name="github" class="mr-2" />
      Projects
    </Heading>

    <Divider />

    <Loader v-if="repositoryStore.loading" bars large />

    <Drawer v-else>
      <template #trigger="{ toggle }">
        <Button
          @click="toggle()"
          variant="primary"
          class="drawer-button lg:hidden mb-4"
          outline
        >
          <Icon name="filter" /> Show Filters
        </Button>
      </template>

      <template #sidebar>
        <LanguageFilterNav
          :languages="languageStore.languages"
          v-model="languageStore.selected"
        />
        <TopicFilterNav :topics="topicStore.topics" v-model="topicStore.selected" />
      </template>

      <RepositoryList :repos="repositoryStore.repositories" />
    </Drawer>
  </main>
</template>
