<template>
    <div>
      <h2 v-html="posts.title" />
    </div>
  </template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>