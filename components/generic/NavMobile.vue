<script setup>
var expand = ref(false);
const emit = defineEmits(['modal-change']);

function modalChange () {
  expand.value = !expand.value;
  emit('modal-change');
}

</script>

<template>
  <nav>
    <div id="permanent">
      <NuxtIcon name="Menu" class="icon" v-show="!expand" @click="modalChange()" />
      <NuxtIcon name="Close" class="icon" v-show="expand" @click="modalChange()" />


      <div id="title-wrapper" class="icon">
        <span id="title">Acadex</span>
        <NuxtIcon name="BookBookmark" id="main"/>
      </div>
    </div>

    <div id="temporary" v-show="expand">
      <div id="top">
        <div class="nav-element">
          <NuxtIcon name="TrendUp" />
          <span class="nav-text">Trending</span>
        </div>
        <div class="nav-element">
          <NuxtIcon name="Graph" />
          <span class="nav-text">Subjects</span>
        </div>
        <div class="nav-element">
          <NuxtIcon name="FileSearch" />
          <span class="nav-text">Search</span>
        </div>
        <div class="nav-element">
          <NuxtIcon name="Calculator" />
          <span class="nav-text">Calculators</span>
        </div>
        <div class="nav-element">
          <NuxtIcon name="Settings" />
          <span class="nav-text">Settings</span>
        </div>
        <div class="nav-element">
          <NuxtIcon name="ListChecks" />
          <span class="nav-text">Rules</span>
        </div>
        <div class="nav-element">
          <NuxtIcon name="Info" />
          <span class="nav-text">About</span>
        </div>
      </div>


      <div id="bottom">
        <div class="nav-element" style="border: none">
          <NuxtIcon name="FilePlus" />
          <span class="nav-text">Contribute</span>
        </div>
      </div>
    </div>

  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  background-color: var(--surface);
  z-index: 2;
  position: fixed;
  top: 0;
  padding: 1rem 2rem;
  border-radius: 0 0 1rem 1rem;
}

a {
  text-decoration: none;
  color: var(--text);
}

#permanent {
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--text);
  z-index: 3;
}

#temporary {
  padding: 1rem;
  padding-top: 6rem;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: var(--surface);
  background: color-mix(in srgb, currentColor 80%, transparent);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overscroll-behavior: contain;
}

.nav-element {
  margin: 0 1rem;
  padding: 0;
  color: var(--text);
  border-bottom: 1px solid color-mix(in srgb, currentColor 20%, transparent);
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  align-content: center;
}

.nav-element:hover {
  fill: var(--accent) !important;
  color: var(--accent) !important;
}

.icon:hover {
  fill: var(--accent) !important;
  color: var(--accent) !important;
}

.nav-text {
  font-weight: bolder;
  font-size: 1.5rem;
  padding-left: 1.5rem;
}

#title {
  font-family: "Comfortaa", sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  padding-right: 0.75rem;
}

#title-wrapper {
  display: flex;
  align-items: center;
  align-content: center;
}

#top {
  display: flex;
  flex-direction: column;
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