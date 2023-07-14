<script setup>
import { tags } from "@/assets/config.js";

let cutTags = tags.slice(0, 6)

///TODO sort by number of articles
</script>

<template>
  <div id="tags-wrapper">
    <div class="title">
      <h2>
        <NuxtIcon name="ClockCountdown" />
        Recently posted
      </h2>

      <NuxtIcon name="ArrowRight" />
    </div>
    <div class="tags">
      <GenericPreview v-for="tag in cutTags" :tag="tag">
        <template v-slot:title>{{ tag }}</template>
        <template v-slot:author>ScratchX98</template>
        <template v-slot:date>
          05/12/22
        </template>
      </GenericPreview>
    </div>

    <div class="title">
      <h2>
        <NuxtIcon name="Like" />
        Most liked
      </h2>

      <NuxtIcon name="ArrowRight" />
    </div>
    <div class="tags">
      <GenericPreview v-for="tag in cutTags" :tag="tag">
        <template v-slot:title>{{ tag }}</template>
        <template v-slot:author>ScratchX98</template>
        <template v-slot:date>
          05/12/22
        </template>
      </GenericPreview>
    </div>

    <div class="title">
      <h2>
        <NuxtIcon name="Eye" />
        Most viewed
      </h2>

      <NuxtIcon name="ArrowRight" />
    </div>
    <div class="tags">
      <GenericPreview v-for="tag in cutTags" :tag="tag">
        <template v-slot:title>{{ tag }}</template>
        <template v-slot:author>ScratchX98</template>
        <template v-slot:date>
          05/12/22
        </template>
      </GenericPreview>
    </div>


    <div class="title">
      <h2>
        <NuxtIcon name="Author" />
        Top authors
      </h2>

      <NuxtIcon name="ArrowRight" />
    </div>
  </div>
</template>

<style scoped>
#tags-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
  overflow-y: scroll;
}

.tags {
  column-gap: 1rem;
  row-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  margin: 1rem;
  margin-bottom: 3rem;
}

.title {
  margin: 1rem;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 2px solid color-mix(in srgb, currentColor 50%, transparent);
}
</style>