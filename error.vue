<script setup>
  defineProps(['error'])
</script>

<template>

  <div id="error-wrapper">
    <div id="inner">
      <span id="status-code">{{ error.statusCode }}</span>
      <div id="error-message">{{ error.message }}</div>

      <NuxtLink to="/">
        Return to home
      </NuxtLink>
    </div>
  </div>

</template>

<style scoped>
* {
  --background: #282c34;
  --surface: #21252b;
  --accent: #7eb8ee;
  --text: #dcdcdc;
}

#error-wrapper {
  width: 100%;
  height: 100%;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Inter", sans-serif;
  overflow: hidden;
}

#inner {
  background-color: var(--surface);
  padding: 4rem;
  border-radius: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

#status-code {
  color: var(--accent);
  font-size: 10rem;
}

#error-message {
  color: var(--text);
  font-size: 1rem;
}

@media screen and (max-width: 400px) {
  #status-code {
    font-size: 30vw;
  }
}

a {
  margin-top: 2rem;
  text-decoration: none;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--background);
  color: var(--text);
  width: 100%;
  text-align: center;
  font-weight: bold;
}

a:hover {
  background-color: var(--accent);
  color: var(--surface);
}
</style>