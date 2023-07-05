<script setup>
import getAllPosts from '../composables/getAllPost.js'

const { posts, error, getData } = await getAllPosts();

console.log(posts);

</script>

<template>
  <main>

  </main>
</template>
