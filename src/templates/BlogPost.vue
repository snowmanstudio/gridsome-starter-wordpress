<template>
    <layout>
      <g-link to="/">Back</g-link>
      <div style="padding-bottom: 20px;">
        {{ $page.blogPost.acf.cat_name }}
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
  }
  }
  }
  
  </page-query>
  
  <style scoped>
  </style>