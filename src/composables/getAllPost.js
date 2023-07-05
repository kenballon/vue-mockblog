import { ref } from "vue";
const getAllPost = () => {
  const posts = ref([]);
  const error = ref(null);

  const getData = async () => {
    try {
      let response = await fetch("http://localhost:3000/posts");

      if (!response.ok) {
        throw new Error("Unable to fetch data from the database...");
      }
      posts.value = await response.json();
    } catch (error) {
      error.value = error.message;
      console.log(error.value);
    }
  };

  return { posts };
};

export default getAllPost;
