import Head from "next/head";
import { getPostData } from "../lib/posts";
import globalStyles from "../styles/utils.module.css";

import Layout from "../components/layout";

export async function getStaticProps() {
  const postData = await getPostData("cgu");

  return {
    props: {
      postData
    }
  };
}

export default function Cgu({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
        <article className={globalStyles.articleMedium}>
        <div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}