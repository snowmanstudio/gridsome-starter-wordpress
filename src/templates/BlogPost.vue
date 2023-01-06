<template>
    <layout>
      <g-link to="/">Back</g-link>
      <div style="padding-bottom: 20px;">
        {{ $page.blogPost.title }}
        <h2>{{ $page.blogPost.slug }}</h2>
      </div>
    </layout>
  </template>

  <script>
    export default {
      name: "BlogPost"
    }
</script>


<page-query>
  query {
    allBlogPost {
      edges {
        node {
          id
          title
          author
        }
      }
    }
  }
</page-query>
    
    <style scoped>
    </style>