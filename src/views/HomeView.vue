<script setup>
import getAllPosts from '../composables/getAllPost.js'
import BlogPostsList from '../components/BlogPostsList.vue'


const { posts, error } = getAllPosts()

</script>

<template>
  <main>
    <h1 class="h1-welcome">VueJS 3 | Mockup Blog App</h1>
    <h2 class="h2-short-desc">This is made VueJS 3 with Router functionality as a Single Page Application or (SPA)</h2>
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
  font-size: 64px;
  margin-bottom: 2rem;
  font-weight: 500;
}

.h2-short-desc {
  font-family: var(--ff-secondary);
  margin-bottom: 3rem;
  font-weight: 300;
  font-size: 1.25rem;
  width: 45ch;
  letter-spacing: .5px;
}

h2 {
  font-weight: 500;
}
</style>