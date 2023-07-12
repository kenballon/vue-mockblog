<script setup>
import { ref } from 'vue';
import createPostItem from '../composables/createPostItem.js'
import { useRouter } from 'vue-router';

const router = useRouter(); // for routing after creation of a blog post

const title = ref('')
const body = ref('')
const tag = ref('')
const tags = ref([])

const handleKeydown = (e) => {
    const key = e.key;
    if (key === 'Enter' || key === ',') {
        if (!tags.value.includes(tag.value.toLowerCase())) {
            tag.value = tag.value.replace(/\s+/g, "")//removes all whitespaces
            tags.value.push(tag.value.toLowerCase())
            console.log(tags);
        }
        tag.value = ''
    }

}

const handleCreate = async () => {
    const tagLower = tags.value
    await createPostItem(title.value, body.value, tagLower).then(
        router.push('/')
    )
}

const deleteTag = (index) => {
    tags.value = tags.value.filter(tag => tag !== index)
};

</script>

<template>
    <div>
        <div class="form-wrapper">
            <h1>Create Blog</h1>
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
                    <label for="tags" class="tag-label-txt align-items-center">
                        <span class="material-symbols-outlined">sell</span>
                        <span>Add Tags:</span>
                    </label>

                    <div class="input-tag-wrapper d-flex flex-wrap">
                        <!-- output tags -->
                        <ul class="tag-list d-flex  flex-wrap">
                            <li class="pill-tag d-flex align-items-center" v-for="tag in tags" :key="tag">
                                <span class="tag">{{ tag }} </span>
                                <span class="material-symbols-outlined" @click="deleteTag(tag)">
                                    close
                                </span>
                            </li>
                            <li>
                                <input type="text" name="tags" class="tag-input-text" id="tags" v-model="tag"
                                    @keydown.enter.prevent="handleKeydown" @keydown.,.prevent="handleKeydown">
                            </li>
                        </ul>

                    </div>

                </div>
                <div class="form-group d-flex align-items-center">
                    <button class="submit-btn">Post</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style>
.input-tag-wrapper {
    padding: 1rem .5rem;
    background: #f9f9f9;
    border: 1px solid rgb(106, 106, 106);
    border-radius: 4px;
}

label {
    font-weight: 600;
    color: #383430;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.tag-input-text {
    background-color: #f9f9f9;
    border: none;
    width: auto;
    padding: 4px 10px;
    color: #b46300;
}

.tag-input-text:focus {
    outline: none;
}

.tag-label-txt {
    display: flex;
}

.tag {
    padding-right: .5rem;
    border-right: 1px solid #b46300;
}

.tag-list {
    margin: 0;
    padding: 0;
    list-style: none;
    gap: .875rem;
}

.pill-tag {
    padding: 4px 10px;
    background-color: #FFD6A5;
    border: 1px solid #b46300;
    border-radius: 40px;
    font-size: 12px;
    opacity: 0.8;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    gap: .5rem;
}

.pill-tag:hover {
    background-color: #d2a268;
    border: 1px solid #b46300;
}
</style>
