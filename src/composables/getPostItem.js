import { ref } from "vue";
import { projectBlogFirestoreDB, doc, getDoc } from "../firebase/config";

const getPostItem = (postID) => {
  const post = ref([null]);
  const error = ref(null);

  const getPostItemData = async () => {
    try {
      const postRef = doc(projectBlogFirestoreDB, "posts", postID);
      const docSnapshot = await getDoc(postRef);
      if (docSnapshot.exists()) {
        post.value = { ...docSnapshot.data(), id: docSnapshot.id };
      } else {
        throw new Error("Post does not exist.");
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  getPostItemData();

  return { post, error };
};

export default getPostItem;
