<script setup>
import { tags } from "@/assets/config.js";

let cutTags = tags.slice(0, 6)

///TODO sort by number of articles
</script>

<template>
  <div id="tags-wrapper">
    <h2>Recently posted</h2>

    <div class="tags">
      <GenericPreview v-for="tag in cutTags" :tag="tag">
        <template v-slot:title>{{ tag }}</template>
        <template v-slot:author>ScratchX98</template>
        <template v-slot:date>
          05/12/22
        </template>
      </GenericPreview>
    </div>

    <h2>Most liked</h2>
    <div class="tags">
      <GenericPreview v-for="tag in cutTags" :tag="tag">
        <template v-slot:title>{{ tag }}</template>
        <template v-slot:author>ScratchX98</template>
        <template v-slot:date>
          05/12/22
        </template>
      </GenericPreview>
    </div>

    <h2>Most viewed</h2>
    <div class="tags">
      <GenericPreview v-for="tag in cutTags" :tag="tag">
        <template v-slot:title>{{ tag }}</template>
        <template v-slot:author>ScratchX98</template>
        <template v-slot:date>
          05/12/22
        </template>
      </GenericPreview>
    </div>


    <h2>Top authors</h2>

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

h2 {
  margin-bottom: 1rem;
  margin-left: 1rem;
}
</style>