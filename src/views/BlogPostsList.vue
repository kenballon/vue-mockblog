<script setup>

const props = defineProps(['blogposts'])

const snippetView = (bodyText) => {
    if (bodyText.length > 150) {
        return bodyText.substring(0, 100) + '...'
    }
    else {
        return bodyText
    }
}
</script>

<template>
    <div class="bloglist-wrapper d-grid">
        <div class="post-items" v-for="post in props.blogposts" :key="post.id">
            <div class="post-item-repeat d-flex flex-dir-col">
                <router-link :to="{ name: 'BlogPostDetails', params: { id: post.id } }">
                    <h2>{{ post.title }}</h2>
                </router-link>
                <div class="post-body-excerpt" v-html="snippetView(post.body)"></div>
                <div class="tags-wrapper d-flex m-auto-top">
                    <span v-for="tag in post.tags" :key="tag.id">
                        <RouterLink :to="{ name: 'TagView', params: { tag: tag } }">
                            {{ tag }}
                        </RouterLink>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
h2 {
    text-transform: capitalize;
}

.bloglist-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.post-items {
    padding: 1.5rem;
    background-color: #f4ebeb;
    border: 1px solid #FF9B9B;
    border-radius: 8px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
}

.post-item-repeat {
    height: 100%;
}

.post-body-excerpt p {
    margin-bottom: 1rem;
}

.tags-wrapper {
    flex-wrap: wrap;
    column-gap: .5rem;
    row-gap: .5rem;

    & span {
        padding: 4px 10px;
        background-color: #FFD6A5;
        border: 1px solid #b46300;
        border-radius: 40px;
        font-size: 12px;
        opacity: 0.8;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
}
</style>