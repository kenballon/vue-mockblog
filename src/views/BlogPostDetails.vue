<template>
    <div class="blogpost-item-wrapper">
        <div class="if-error-fetch" v-if="error">
            {{ error }}
        </div>
        <article>
            <div class="tags-wrapper d-flex m-auto-top">
                <span v-for="tag in post.tags" :key="tag.id">#{{ tag }}</span>
            </div>
            <div class="blog-heading-title">
                <h1>{{ post.title }}</h1>
            </div>
            <div class="blog-body" v-html="post.body"></div>
        </article>
    </div>
</template>
<script setup>
import getPostItem from '../composables/getPostItem.js'

const props = defineProps(['id'])

const { post, error } = getPostItem(props.id);
</script>
<style>
.blogpost-item-wrapper article {
    max-width: 600px;
    margin-inline: auto;
    margin-block: 4rem;
}

.blog-heading-title h1 {
    font-size: 48px;
    margin-bottom: 2rem;
    line-height: 1.2em;
    opacity: 0.9;
    font-weight: 500;
}

.blog-body p {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.5em;
}

.blogpost-item-wrapper .tags-wrapper {
    margin-bottom: 1.25rem;
}
</style>