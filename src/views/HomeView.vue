<script setup>

import getAllPosts from '../composables/getAllPost.js'

const { posts, error } = getAllPosts()

</script>

<template>
  <main>
    <h1>Welcome to this mockup blog</h1>
    <div class="post-wrapper">
      <div class="post-items" v-for="post in posts" :key="post.id">
        <div class="post-item-repeat">
          <h2>{{ post.title }}</h2>
          <div class="post-body-excerpt">
            {{ post.body }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
