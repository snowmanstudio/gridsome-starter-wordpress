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
      name: "BlogPost"
    }
</script>


<page-query>
    query Post ($path: String) {
    blogPost (path: $path) {
    title
    slug
    }
    }
    
    </page-query>
    
    <style scoped>
    </style>