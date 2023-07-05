import { ref } from "vue";

const getPostItem = (id) => {
  const post = ref([null]);
  const error = ref(null);

  const getPostItemData = async () => {
    try {
      let response = await fetch("http://localhost:3000/blogPosts/" + id);

      if (!response.ok) {
        throw new Error("Unable to fetch that blog post...");
      }
      post.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  getPostItemData();

  return { post, error };
};

export default getPostItem;
