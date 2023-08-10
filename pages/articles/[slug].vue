<script setup>
import { useArticleStore } from '/stores/article.js'

const route = useRoute()

const s = useArticleStore()

onServerPrefetch(async () => {
  await s.fill(route.params.slug)
})
</script>

<template>
<h1>{{s.article.title}}</h1>

<p>{{s.article.content}}</p>

<h3>{{ s.article.date }}</h3>
</template>

<style scoped>

h1 {
  font-size: 3rem;
  font-weight: 900;
}

</style> 