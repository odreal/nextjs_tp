import globalStyles from "../styles/utils.module.css";

import Head from "next/head";

import { getPostData } from "../lib/posts";

import Layout from "../components/layout";

export async function getStaticProps() {
  const postData = await getPostData("home");

  return {
    props: {
      postData
    }
  };
}

export default function Home({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <article className={globalStyles.articleMedium}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
