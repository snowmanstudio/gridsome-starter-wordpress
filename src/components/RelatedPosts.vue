<template>
  <div>
    <h2>Related Posts</h2>
    <ul>
      <li v-for="post in relatedPosts" :key="post.id">
        <g-link :to="post.path">{{ post.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RelatedPosts',
  props: ['categories', 'posts'],
  computed: {
    relatedPosts() {
      return this.posts.filter(post => {
        return post.categories.some(category => {
          return this.categories.includes(category)
        })
      })
    }
  }
}
</script>
