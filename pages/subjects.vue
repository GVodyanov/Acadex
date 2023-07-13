<script setup>
import { tags } from "@/assets/config.js";

///TODO sort by number of articles
</script>

<template>
  <div id="tags-wrapper">
    <h2>What are you interested in today?</h2>

    <div id="tags">
      <GenericPreview v-for="tag in tags" :tag="tag">
        <template v-slot:title>{{ tag }}</template>
        <template v-slot:date>
          5 articles
        </template>
      </GenericPreview>
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

#tags {
  column-gap: 1rem;
  row-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 2rem;
}

</style>