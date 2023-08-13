<script setup>
import { timestamp } from "@/utils";
import Card from "@/components/Card.vue";
import Icon from "@/components/Icon.vue";
import Link from "@/components/Link.vue";
import Badge from "@/components/Badge.vue";
import Divider from "@/components/Divider.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import LanguageList from "./LanguageList.vue";
import TopicList from "./TopicList.vue";

defineProps({
  repo: Object,
});
</script>

<template>
  <Card
    :class="[
      'bg-neutral text-neutral-content group max-md:card-compact',
      'bg-opacity-70 hover:bg-opacity-100',
    ]"
    image-aside
  >
    <template #image>
      <Icon name="git" class="max-xl:hidden text-9xl opacity-25" />
    </template>

    <div class="space-y-2">
      <div class="flex justify-between items-center gap-x-3">
        <Link
          :href="repo.html_url"
          :label="repo.name"
          target="__blank"
          variant="primary"
          class="text-xl"
          hover
        />

        <Link
          v-if="repo.homepage"
          :href="repo.homepage"
          target="__blank"
          class="opacity-50 group-hover:opacity-100 text-2xl"
        >
          <Icon
            name="play-circle"
            class="group-hover:animate-pulse hover:group-hover:animate-none"
          />
        </Link>

        <Badge
          class="max-lg:hidden ml-auto opacity-50"
          :label="timestamp(repo.created_at)"
        />
      </div>

      <p>{{ repo.description }}</p>

      <div
        :class="[
          'flex flex-col gap-2',
          'grayscale opacity-50',
          'group-hover:opacity-100 group-hover:grayscale-0',
          'transition-all duration-300',
        ]"
      >
        <LanguageList :languages="repo.languages" />
        <ProgressBar :items="repo.languages" small />
        <TopicList :topics="repo.topics" class="max-sm:hidden" />
      </div>
    </div>
  </Card>
</template>
