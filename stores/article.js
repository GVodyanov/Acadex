import { defineStore } from 'pinia'
import { formatDate } from '/services/formatDate.js'

export const useArticleStore = defineStore('article', {
  state: () => ({ article: {} }),

  actions: {
    async fill(slug) {
      const response = await useFetch("/api/articles/" + slug)
    
      this.article = response.data
      this.article.readTime = this.getReadTime()
      this.article.date = formatDate(this.article.date)
    },

    getReadTime() {
      return Math.round((this.article.content.trim().split(/\s+/).length / 200) * 2) / 2
    }
  
  }
})