import { ref } from "vue";
const getAllPost = () => {
  const posts = ref([]);
  const error = ref(null);

  const getData = async () => {
    try {
      let response = await fetch("http://localhost:3000/blogPosts");

      if (!response.ok) {
        throw new Error("Unable to fetch data from the database...");
      }
      posts.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  getData();

  return { posts, error };
};

export default getAllPost;
