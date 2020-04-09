import useSWR from "swr";
import Layout from "../../components/Layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Person = () => {
  const { data, error } = useSWR("/api/people", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout
      content={
        <ul>
          {data.map((p, i) => (
            <Person key={i} person={p} />
          ))}
        </ul>
      }
    />
  );
};

export default Person;
