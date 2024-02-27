<script setup>
import { ref } from 'vue';
import getFilteredTags from '../composables/getFilteredTags.js'

const props = defineProps(['posts'])
const tags = ref([])

getFilteredTags(props.posts, tags)

</script>

<template>
    <div>
        <div class="heading-wrapper">
            <h5>Filter</h5>
        </div>
        <div class="filter-tags">
            <ul class="tag-lists d-flex align-items-center flex-wrap ul-no-styling">
                <li class="tag" v-for="tag in tags" :key="tag">
                    <RouterLink :to="{ name: 'TagView', params: { tag: tag } }">
                        {{ tag }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.heading-wrapper h5 {
    font-size: 1.125rem;
    font-family: var(--ff-secondary);
}

.tag-lists {
    gap: 0.875rem;
}

.tag-lists .tag {
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

.tag-lists .tag:hover {
    background-color: #e37d00;
}

.tag-lists .tag:hover a {
    color: #FFD6A5;
}

</style>