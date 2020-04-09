import Link from "next/link";
import Layout from "../../components/Layout";
import { posts } from "../../posts";

const Blog = () => (
  <Layout
    content={
      <div>
        <h1>Blog</h1>
        <ul>
          {Object.entries(posts).map((value, index) => {
            return (
              <li key={index}>
                <Link href="/blog/[id]" as={"/blog/" + value[0]}>
                  <a>Title: {value[1].title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    }
  />
);

export default Blog;
