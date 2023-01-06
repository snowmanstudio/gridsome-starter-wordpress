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


query BlogPost ($id: ID!) {
  allBlogPost (id: $id) {
    edges {
      node {
        title
        slug
      }
    }
  }
}
    
    <style scoped>
    </style>