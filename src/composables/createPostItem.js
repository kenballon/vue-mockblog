const createPostItem = async (title, body, tags) => {
  const data = new Map();
  data.set("title", title);
  data.set("body", body);
  data.set("tags", tags);

  const jsonData = JSON.stringify(data, (key, value) => {
    // convert maps to a plain objects
    if (value instanceof Map) {
      return Object.fromEntries(value);
    }

    return value;
  });

  try {
    await fetch("http://localhost:3000/blogPosts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
    });
  } catch (err) {
    console.log(err);
  }
  return { title, body, tags };
};

export default createPostItem;
