<template>
    <div>
        <div class="error-msg-wrapper" v-if="error">
            {{ error }}
        </div>
        <div class="post-wrapper" v-if="posts.length">
            <BlogPostsList :blogposts="postWithTags" />
        </div>
        <div class="loading-post" v-else>loading list of blogs...</div>
    </div>
</template>
<script setup>
import BlogPostsList from '../components/BlogPostsList.vue'
import getAllPosts from '../composables/getAllPost.js'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { posts, error } = getAllPosts();

const route = useRoute()

const postWithTags = computed(() => {
    const tag = route.params.tag
    return posts.value.filter(post => post.tags.includes(tag.toLowerCase()))
})

</script>
<style scoped>
.post-wrapper {
    padding-top: 5rem;
}
</style>