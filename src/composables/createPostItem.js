import { collection, addDoc, projectBlogFirestoreDB } from "../firebase/config";

const createPostItem = async (title, body, tags) => {
  const post = {
    title: title,
    body: body,
    tags: tags,
  };

  try {
    await addDoc(collection(projectBlogFirestoreDB, "posts"), post);
  } catch (err) {
    console.log(err);
  }
  return { title, body, tags };
};

export default createPostItem;
