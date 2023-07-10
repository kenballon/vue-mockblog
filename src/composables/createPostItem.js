import { collection, addDoc, db, timeStamp } from "../firebase/config";

const createPostItem = async (title, body, tags) => {
  const post = {
    title: title,
    body: body,
    tags: tags,
    createdAt: timeStamp,
  };

  try {
    await addDoc(collection(db, "posts"), post);
  } catch (err) {
    console.log(err);
  }
  return { title, body, tags };
};

export default createPostItem;
