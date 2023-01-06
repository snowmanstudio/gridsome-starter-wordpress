<template>
    <Layout>
      <h1 v-html="$page.BlogPost.title"/>
      <h2 v-html="$page.BlogPost.author"/>
      <h2 v-html="$page.BlogPost.id"/>
      </template>
    </Layout>
  </template>
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
<script>
    export default {
      metaInfo () {
        return {
          title: this.$page.BlogPost.title
        }
      }
    }
    </script>