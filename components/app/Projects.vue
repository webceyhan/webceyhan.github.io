<script setup>
import { useTopicStore } from "@/store/topic";
import { useLanguageStore } from "@/store/language";
import { useRepositoryStore } from "@/store/repository";

const topicStore = useTopicStore();
const languageStore = useLanguageStore();
const repositoryStore = useRepositoryStore();
</script>

<template>
  <main class="container mx-auto px-3">
    <Heading class="max-md:text-center" large>
      <Icon name="github" class="mr-2" /> Projects
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
        <AppProjectLanguageFilterNav
          :languages="languageStore.languages"
          v-model="languageStore.selected"
        />

        <Accordion class="w-full">
          <Collapse
            v-for="({ category, topics }, i) in topicStore.topicsByCategory"
            :key="i"
            :title="category"
            class="border-t border-neutral"
          >
            <AppProjectTopicFilterNav :topics="topics" v-model="topicStore.selected" />
          </Collapse>
        </Accordion>
      </template>

      <AppProjectRepositoryList :repos="repositoryStore.repositories" />
    </Drawer>
  </main>
</template>
