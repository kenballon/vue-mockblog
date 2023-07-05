<script setup>
import getAllPosts from '../composables/getAllPost.js'
import BlogPostsList from '../components/BlogPostsList.vue'

const { posts, error } = getAllPosts()

</script>

<template>
  <main>
    <h1 class="h1-welcome">Welcome to this mockup blog</h1>
    <div class="error-msg-wrapper" v-if="error">
      {{ error }}
    </div>
    <div class="post-wrapper" v-if="posts.length">
      <BlogPostsList :blogposts="posts" />
    </div>
    <div class="loading-post" v-else>loading list of blogs...</div>
  </main>
</template>
<style>
main {
  padding-top: 5rem;
}

.h1-welcome {
  text-transform: capitalize;
  font-size: 3rem;
  margin-bottom: 2rem;
}
</style>