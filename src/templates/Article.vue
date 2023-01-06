<template>
  <layout>
    <g-link to="/">Back</g-link>
    <div style="padding-bottom: 20px;">
      {{ $page.article.id }}
      <a target="_blank" :href="$page.blogPost.link">{{ $page.article.id }}</a>
    </div>
  </layout>
</template>

<script>
  export default {
    metaInfo () {
      return {
        slug: this.$page.blogPost.slug
      }
    }
  }
  </script>


<page-query>
  query {
    allArticle {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
</page-query>
