<script setup>
import TagFilter from '../components/TagFilter.vue';
import getAllPosts from '../composables/getAllPost.js'
import BlogPostsList from '../views/BlogPostsList.vue'

const { posts, error } = getAllPosts()

</script>

<template>
  <main>
    <h1 class="h1-welcome">Mockup Blog App</h1>
    <ul class="h2-short-desc">
      <li>Made with Vue 3</li>
      <li>Connected to Firebase</li>
      <li>Routing included</li>
    </ul>
    <div class="error-msg-wrapper" v-if="error">
      {{ error }}
    </div>
    <div class="post-wrapper" v-if="posts.length">
      <TagFilter :posts="posts" />
      <BlogPostsList :blogposts="posts" />
    </div>
    <div class="loading-post" v-else>loading list of blogs...</div>
  </main>
</template>

<style>
main {
  padding-top: 5rem;
  padding-inline: 1.125rem;
}

.h1-welcome {
  text-transform: capitalize;
  font-size: 64px;
  margin-bottom: 2rem;
  font-weight: 500;
}

.h2-short-desc {
  font-family: var(--ff-secondary);
  font-weight: 300;
  font-size: 1.25rem;
  width: 45ch;
  letter-spacing: .5px;
}

h2 {
  font-weight: 500;
}

.post-wrapper {
  padding-top: 1rem;
  padding-bottom: 4rem;
}
</style>