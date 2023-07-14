<template>
  <div id="input-wrapper">
    <NuxtIcon name="Search" id="home-input-icon" />
    <input type="text" placeholder="Search for anything">
  </div>
</template>

<style scoped>
input {
  border: none;
  background-color: transparent;
  padding: 1rem;
  width: 100%;
  padding-left: 2.9rem;
  font-size: 1rem;
  color: var(--text);
}

input:focus {
  outline: none;
}

#input-wrapper {
  background-color: var(--surface);
  border-radius: 1rem;
  border-bottom: 1px solid var(--accent);
  padding: 0 1rem;
}

::placeholder {
  color: var(--accent);
  font-size: 1rem;
  opacity: 1;
}
</style>

<style>
#home-input-icon svg {
  margin-top: 0.7rem;
  position: absolute;
  height: 2rem;
  widows: 2rem;
}

#home-input-icon path {
  fill: var(--accent) !important;
}
</style>