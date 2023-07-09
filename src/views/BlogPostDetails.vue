<template>
    <div class="blogpost-item-wrapper">
        <div class="if-error-fetch" v-if="error">
            {{ error }}
        </div>
        <article>

            <div class="tags-wrapper d-flex m-auto-top gap-1">
                <RouterLink :to="{ name: 'Home' }" class=" d-flex align-items-center">
                    <div class="svg-back-arrow-wrapper">
                        <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.292891 7.29289C-0.0976329 7.68342 -0.0976329 8.31658 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292891 7.29289ZM41 7L0.999998 7V9L41 9V7Z"
                                fill="#1B1B1B" />
                        </svg>
                    </div>
                </RouterLink>
            </div>
            <div class="blog-heading-title">
                <h1>{{ post.title }}</h1>
            </div>
            <div class="blog-body" v-html="post.body"></div>

            <div class="tags-wrapper d-flex m-auto-top gap-1">
                <span v-for="tag in post.tags" :key="tag.id">
                    <RouterLink :to="{ name: 'TagView', params: { tag: tag } }">
                        {{ tag }}
                    </RouterLink>
                </span>
            </div>
        </article>
    </div>
</template>
<script setup>
import getPostItem from '../composables/getPostItem.js'

const props = defineProps(['id'])

const { post, error } = getPostItem(props.id);
</script>
<style scoped>
h1 {
    text-transform: capitalize;
    font-weight: 300;
}

.blogpost-item-wrapper article {
    max-width: 45ch;
    margin-inline: auto;
    margin-block: 4rem;
}

.blog-heading-title h1 {
    font-size: 40px;
    margin-bottom: 2.5rem;
    line-height: 1.2em;
}

.blog-body p,
div.blog-body {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    line-height: 1.5em;
    font-family: var(--ff-primary);
    opacity: 0.9;
    font-weight: 300;
}

@supports(initial-letter: 3) or (-webkit-initial-letter:4) {

    .blog-body p:first-child::first-letter,
    .blog-body::first-letter {
        -webkit-initial-letter: 3;
        initial-letter: 3;
        margin-right: .5rem;
    }
}

.blog-body p:first-child::first-letter,
.blog-body::first-letter {
    font-size: 3rem;
}



.blogpost-item-wrapper .tags-wrapper {
    gap: 1.25rem;
    margin-bottom: 1.25rem;
}

.svg-back-arrow-wrapper:hover svg path {
    fill: var(--color-600-dark);
}
</style>