<template>
    <div>
        <h1>Create Blog</h1>
        <div class="form-wrapper">
            <form @submit.prevent="handleCreate">
                <div class="form-group">
                    <label for="blog-heading">Blog Title:</label>
                    <input type="text" name="blog-heading" id="blog-heading" required v-model="title">
                </div>
                <div class="form-group">
                    <label for="post-body">Body Text:</label>
                    <textarea name="post-body" id="post-body" v-model="body"></textarea>
                </div>
                <div class="form-group">
                    <label for="tags">Tags:</label>
                    <input type="text" name="tags" id="tags" v-model="tag" @keydown.enter.prevent="handleKeydown">
                    <!-- output tags -->
                    <ul v-for="tag in tags" :key="tag">
                        <li class="pill-tag">#{{ tag }}</li>
                    </ul>
                </div>
                <div class="form-group d-flex align-items-center">
                    <button class="submit-btn">Post</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import createPostItem from '../composables/createPostItem.js'
import { useRouter } from 'vue-router';

const router = useRouter();

const title = ref('')
const body = ref('')
const tag = ref('')
const tags = ref([])

const handleKeydown = () => {
    console.log('adde');
    if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "")//removes all whitespaces
        tags.value.push(tag.value)
    }
    tag.value = ''
}

const handleCreate = async () => {
    await createPostItem(title.value, body.value, tags.value).then(
        //route to home
        router.push('/')
    )
}

</script>
