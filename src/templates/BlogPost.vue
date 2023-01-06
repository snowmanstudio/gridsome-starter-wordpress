<template>
  <layout>
    <g-link to="/">Back</g-link>
    <div style="padding-bottom: 20px;">
      {{ $page.blogPost.title }}
      <a target="_blank" :href="$page.blogPost.link">{{ $page.blogPost.slug }}</a>
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
    allBlogPost {
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
