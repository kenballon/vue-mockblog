import { ref } from "vue";
import { db, collection, query, orderBy, onSnapshot } from "../firebase/config";

const getAllPost = () => {
  const posts = ref([]);
  const error = ref(null);

  const getData = () => {
    try {
      // get db collection from Firebase
      const colRef = collection(db, "posts"); //collection reference
      const q = query(colRef, orderBy("createdAt", "desc")); // query needed for us to sort data

      // snapshot needed so that we don't need to always refresh
      // the browswer for any data changes
      onSnapshot(q, (snapshot) => {
        posts.value = snapshot.docs.map((doc) => {        
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
