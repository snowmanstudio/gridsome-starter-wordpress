<template>
  <Layout>
    <h1>Welcome to my blog :)</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Welcome to my blog :)'
  }
}
</script>
<style>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -1rem;
}

.post-list li {
  width: 50%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

@media (max-width: 600px) {
  .post-list li {
    width: 100%;
  }
}

</style>
