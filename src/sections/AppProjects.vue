<script setup>
import { useRepository } from "../store/repository";
import Heading from "../components/Heading.vue";
import Divider from "../components/Divider.vue";
import Loader from "../components/Loader.vue";
import Icon from "../components/Icon.vue";
import TopicFilterNav from "../components/TopicFilterNav.vue";
import LanguageFilterNav from "../components/LanguageFilterNav.vue";
import RepositoryList from "../components/RepositoryList.vue";

const {
  loading,
  topics,
  languages,
  repositories,
  selectedTopic,
  selectedLanguage,
} = useRepository();
</script>

<template>
  <main class="container mx-auto px-3">
    <Heading class="max-md:text-center" large>
      <Icon name="github" class="mr-2" />
      Projects
    </Heading>

    <Divider />

    <Loader v-if="loading" bars large />

    <div v-else class="flex flex-col md:flex-row gap-10">
      <!-- side navigation -->
      <aside class="md:w-1/3 space-y-8">
        <language-filter-nav
          class="justify-center md:justify-start"
          :languages="languages"
          v-model="selectedLanguage"
        />

        <topic-filter-nav
          class="justify-center md:justify-start"
          :topics="topics"
          v-model="selectedTopic"
        />
      </aside>

      <!-- content section -->
      <section class="md:w-2/3">
        <repository-list :repos="repositories" />
      </section>
    </div>
  </main>
</template>
