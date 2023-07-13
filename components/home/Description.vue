<script setup>
const props = defineProps(['title', 'text'])
</script>

<template>
  <div id="wrapper">
    <h3>{{ props.title }}</h3>
    <p>{{ props.text }}</p>
  </div>

</template>

<style scoped>
#wrapper {
  background-color: var(--surface);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  line-height: 1.5;
}
</style>