import { ref } from "vue";
import {
  projectBlogFirestoreDB,
  collection,
  getDocs,
} from "../firebase/config";

const getAllPost = () => {
  const posts = ref([]);
  const error = ref(null);

  const getData = async () => {
    try {
      const res = collection(projectBlogFirestoreDB, "posts");
      const data = await getDocs(res);

      posts.value = data.docs.map((doc) => {
        const newArrObj = { ...doc.data(), id: doc.id };
        return newArrObj;
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  getData();

  return { posts, error };
};

export default getAllPost;
