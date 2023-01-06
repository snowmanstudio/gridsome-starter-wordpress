<template>
    <layout>
      <g-link to="/">Back</g-link>
      <div style="padding-bottom: 20px;">
        {{ $page.blogPost.acf.cat_name }}
      </div>
      <div style="padding-bottom: 20px;">
            <h3 v-for="edge in $page.blogPost.acf.category" :key="edge.category.term_id">{{ $edge.category.name }}</h3>
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
      
    }
  }
  }
  }
  
  </page-query>
  
  <style scoped>
  </style>