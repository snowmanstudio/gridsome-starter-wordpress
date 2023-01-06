<template>
    <layout>
      <g-link to="/">Back</g-link>
      <div style="padding-bottom: 20px;">
        {{ $page.blogPost.acf.cat_name }}
      </div>
      <div style="padding-bottom: 20px;">
      <h3>{{ $page.blogPost.acf.category }}</h3>
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
    category 
    }
  }
  }
  
  </page-query>
  
  <style scoped>
  </style>