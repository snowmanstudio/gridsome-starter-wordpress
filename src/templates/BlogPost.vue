<template>
    <layout>
      <g-link to="/">Back</g-link>
      <div style="padding-bottom: 20px;">
        {{ $page.blogPost.acf.cat_name }}
      </div>
      <div style="padding-bottom: 20px;">
            <h3 v-for="edge in $page.blogPost.acf.category" :key="edge.blogPost.acf.category.term_id">{{ $edge.blogPost.acf.category.name }}</h3>
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
    category (filter: 
        { 
            taxonomy: { contains: ['category'] }
        }    ) 
        {
        term_id
        name
        taxonomy
        }
    }
  }
  }
  
  </page-query>
  
  <style scoped>
  </style>