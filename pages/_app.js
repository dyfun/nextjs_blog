import "../styles/globals.scss";
import Layout from "../components/Layout";

const Blog = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default Blog;
