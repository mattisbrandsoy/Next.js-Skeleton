import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/Layout";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/posts/${query.id}`,
    fetcher
  );

  if (error) return <p>This does not exist ? ! ?</p>;
  if (!data) return <p>No data no Cry !!!</p>;

  return (
    <Layout
      content={
        <>
          <h3>Title: {data.title}</h3>
          <p>Content: {data.content}</p>
        </>
      }
    />
  );
};
