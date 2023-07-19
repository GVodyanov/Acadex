<script setup>

</script>

<template>
  <div id="sort-wrapper">
    <div id="sort-container">
      <h3>
        <NuxtIcon name="Sort" /> Sort
      </h3>
    </div>
    <div id="sort-options">
      <span>Likes</span>

      <span>Views</span>

      <span>Time</span>
    </div>
  </div>
</template>

<style scoped>
#sort-wrapper {
  display: flex;
  flex-direction: column;
}

#sort-container {
  border-radius: 1rem;
  background-color: var(--surface);
  padding: 1rem;
}

#sort-options {
  position: relative;
  background-color: var(--surface);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}

h3:hover {
  color: var(--accent);
  fill: var(--accent) !important;
}
</style>