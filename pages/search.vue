<script setup>

</script>

<template>
  <div id="search-wrapper">

    <h2>What are you interested in today?</h2>

    <GenericInput />

    <div id="filter-wrapper">

    </div>

  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 2rem;
}

#search-wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#filter-wrapper {
  display: flex;
  width: 100%;
  justify-content: stretch;
  gap: 1rem;
  margin-top: 2rem;
}
</style>