import { ref } from "vue";
import { db, collection, query, orderBy, onSnapshot } from "../firebase/config";

const getAllPost = () => {
  const posts = ref([]);
  const error = ref(null);

  const getData = () => {
    try {
      const colRef = collection(db, "posts");
      const q = query(colRef, orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        posts.value = snapshot.docs.map((doc) => {
          console.log({ ...doc.data(), id: doc.id });
          return { ...doc.data(), id: doc.id };
        });
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
