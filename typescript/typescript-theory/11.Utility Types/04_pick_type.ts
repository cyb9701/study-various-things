/**
 * Pick Type
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Pick<Post, 'title' | 'content'>) {
  return { ...post, createdA: new Date() };
}

createPost({
  title: 'aaa',
  content: 'bbb',
});
