import { ref } from "vue";
import { db, collection, getDocs } from "../firebase/config";

const getAllPost = () => {
  const posts = ref([]);
  const error = ref(null);

  const getData = async () => {
    try {
      const data = await getDocs(collection(db, "posts"));

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
