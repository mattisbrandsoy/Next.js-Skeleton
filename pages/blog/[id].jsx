import { useRouter } from "next/router";
import posts from "../../posts.json";
import Layout from "../../components/Layout";

export default () => {
  const router = useRouter();

  const post = posts[router.query.id];
  if (!post) return <p>This does not exist ? ! ?</p>;

  return (
    <Layout
      content={
        <>
          <h3>Title: {post.title}</h3>
          <p>Content: {post.content}</p>
        </>
      }
    />
  );
};
