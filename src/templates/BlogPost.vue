<template>
    <layout>
      <g-link to="/">Back</g-link>
      <div style="padding-bottom: 20px;">
        {{ $page.blogPost.acf.cat_name }}
      </div>
      <div style="padding-bottom: 20px;">
            <g-link :to="category.slug">{{ $page.blogPost.acf.category.name }}</g-link>
      </div>
    </layout>
  </template>
  
  <script>
  export default {
    name: "BlogPost"
  }
  </script>
  
  
  <page-query>
  query Post ($path: String) {
  blogPost (path: $path) {
  id
  acf{
    cat_name
    category{
        term_id
        name
        slug
    }
  }
  }
  }
  
  </page-query>
  
  <style scoped>
  </style>