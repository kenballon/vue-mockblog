<script setup>
import TagFilter from '../components/TagFilter.vue';
import getAllPosts from '../composables/getAllPost.js'
import BlogPostsList from '../views/BlogPostsList.vue'

const { posts, error } = getAllPosts()

</script>

<template>
  <main>
    <h1 class="h1-welcome">Vue 3 Mockup Blog Site</h1>
    <h3 class="h2-short-desc">
      Blog site project made with Vue 3 Composition API. Database is connected using Firebase No-SQL.
    </h3>
    <div class="error-msg-wrapper" v-if="error">
      {{ error }}
    </div>
    <div class="post-wrapper" v-if="posts.length">
      <TagFilter :posts="posts" />
      <BlogPostsList :blogposts="posts" />
    </div>
    <div class="loading-post" v-else>loading blog posts...</div>
  </main>
</template>

<style>
main {
  padding-top: 5rem;
  padding-inline: 1.125rem;
}

.h1-welcome {
  text-transform: capitalize;
  font-size: clamp(32px, 5vw, 64px);
  margin-bottom: 2rem;
  font-weight: 500;

}

.h2-short-desc {
  font-family: var(--ff-secondary);
  font-weight: 300;
  font-size: 1.25rem;
  width: 45ch;
  letter-spacing: .5px;

  @media (max-width:540px) {
    width: 100%;
  }
}

h2 {
  font-weight: 500;
}

.post-wrapper {
  padding-top: 1rem;
  padding-bottom: 4rem;
}
</style>