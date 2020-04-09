import Layout from "../components/Layout";

const Index = () => (
  <Layout
    content={
      <div className="container">
        <main>
          <h1 className="title">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className="grid">
            <a href="https://nextjs.org/docs" className="card">
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </div>
        </main>
      </div>
    }
  />
);

export default Index;
