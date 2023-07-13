<script setup>
var expand = ref(false);

</script>

<template>
  <nav @mouseover="expand = true" @mouseleave="expand = false">
    <div class="top">
      <NuxtLink to="/" class="nav-element">
        <NuxtIcon name="BookBookmark" id="main" />
        <span v-show="expand" id="title">Acadex</span>
      </NuxtLink>
      <div class="nav-element">
        <NuxtIcon name="TrendUp" />
        <span v-show="expand">Trending</span>
      </div>
      <NuxtLink to="/subjects" class="nav-element">
        <NuxtIcon name="Graph" />
        <span v-show="expand">Subjects</span>
      </NuxtLink>
      <div class="nav-element">
        <NuxtIcon name="FileSearch" />
        <span v-show="expand">Search</span>
      </div>
      <div class="nav-element">
        <NuxtIcon name="Calculator" />
        <span v-show="expand">Calculators</span>
      </div>
      <div class="nav-element">
        <NuxtIcon name="Settings" />
        <span v-show="expand">Settings</span>
      </div>
      <div class="nav-element">
        <NuxtIcon name="ListChecks" />
        <span v-show="expand">Rules</span>
      </div>
      <div class="nav-element">
        <NuxtIcon name="Info" />
        <span v-show="expand">About</span>
      </div>
    </div>

    <div class="bottom">
      <div class="nav-element">
        <NuxtIcon name="FilePlus" />
        <span v-show="expand">Contribute</span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 5rem;
  height: 100%;
  background-color: var(--surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  border-radius: 0 1rem 1rem 0;
  padding: 1.5rem 0.5rem;
  justify-content: space-between;
  z-index: 2;
}

a {
  text-decoration: none;
  color: var(--text);
}

#title {
  font-family: "Comfortaa", sans-serif;
  font-weight: 900;
}

.nav-element span {
  font-weight: bolder;
  font-size: 1.5rem;
  padding: 0rem 1rem 0rem 0.5rem;
}

.nav-element:hover {
  fill: var(--accent) !important;
  color: var(--accent) !important;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

</style>

<style>
#main path {
  fill: var(--accent) !important;
}

.nuxt-icon svg {
  margin-bottom: 0.250rem;
  height: 2.3rem;
  width: 2.3rem;
}

</style>