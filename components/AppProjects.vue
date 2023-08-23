<script setup lang="ts">
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
        <LanguageFilterNav
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
            <TopicFilterNav :topics="topics" v-model="topicStore.selected" />
          </Collapse>
        </Accordion>
      </template>

      <!-- paging / filtering info -->
      <div
        class="flex flex-wrap justify-center items-center opacity-50 text-sm mb-4 gap-2"
      >
        <!-- paging info -->
        <div class="max-sm:w-full text-center">
          Showing
          <Countdown :value="repositoryStore.repositories.length" /> of
          <Countdown :value="repositoryStore.total" />
          projects
          <span v-if="repositoryStore.hasFilter">with</span>
        </div>

        <!-- filtering info -->
        <Button
          v-if="languageStore.selected"
          @click="languageStore.selected = null"
          outline
          micro
        >
          {{ languageStore.selected }} <Icon name="x-circle-fill" />
        </Button>

        <Button
          v-if="topicStore.selected"
          @click="topicStore.selected = null"
          outline
          micro
        >
          {{ topicStore.selected }} <Icon name="x-circle-fill" />
        </Button>
      </div>

      <RepositoryList :repos="repositoryStore.repositories" />

      <!-- load more -->
      <!-- bugfix: hydration mismatch can be avoided by wrapping this in a client-only tag -->
      <client-only>
        <Button
          v-if="repositoryStore.hasMore"
          @click="repositoryStore.loadMore()"
          variant="primary"
          class="w-full my-4 mx-auto"
          outline
        >
          <Icon name="caret-down" /> Load More
        </Button>
      </client-only>
    </Drawer>
  </main>
</template>
