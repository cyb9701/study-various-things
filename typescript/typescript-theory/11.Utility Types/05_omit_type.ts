/**
 * Omit Type
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Omit<Post, 'createdAt'>) {
  return { ...post, createdA: new Date() };
}

createPost({
  title: 'aaa',
  content: 'bbb',
});
