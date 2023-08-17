<script setup>
import Link from "@/components/ui/Link.vue";

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
      <Icon name="git" class="max-xl:hidden w-40 text-9xl opacity-25" />
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
          variant="secondary"
          class="opacity-50 group-hover:opacity-100 text-2xl no-underline"
        >
          <span class="relative flex h-6 w-6">
            <Icon name="play-circle" class="relative inline-flex" />
            <Icon
              name="play-circle"
              :class="[
                'absolute inline-flex opacity-75',
                'group-hover:animate-ping hover:group-hover:animate-none',
              ]"
            />
          </span>
        </Link>

        <Badge
          class="max-lg:hidden ml-auto opacity-50 rounded-md"
          :label="timestamp(repo.created_at)"
        />
      </div>

      <p class="!mb-5 lg:text-lg">{{ repo.description }}</p>

      <div
        :class="[
          'flex flex-col gap-2',
          'grayscale opacity-50',
          'group-hover:opacity-100 group-hover:grayscale-0',
          'transition-all duration-300',
        ]"
      >
        <TopicList :topics="repo.topics" class="max-sm:hidden" />

        <ProgressBar :items="repo.languages" small />

        <LanguageList :languages="repo.languages" />
      </div>
    </div>
  </Card>
</template>
