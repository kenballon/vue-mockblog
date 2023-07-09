/**
 *
 * @param {posts} posts - get all post from a local or database
 * @param {tags} tags - filter tags
 * @returns {tags} - return the all tags
 */

const getFilterTags = (posts, tags) => {
  const tagSet = new Set();

  posts.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });

  tags.value = [...tagSet].sort();

  return tags;
};

export default getFilterTags;
