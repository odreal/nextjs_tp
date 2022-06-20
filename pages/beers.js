import Link from "next/link";
import axios from "axios";
import Layout from "../components/layout";
import styles from "../styles/Beers.module.css";
import globalStyles from "../styles/utils.module.css";
import { motion } from 'framer-motion';

export async function getStaticProps() {
  const { data } = await axios.get("https://api.punkapi.com/v2/beers?per_page=80");
  return {
    props: {
      beers: data
    }
  };
}

export default function Post({ beers }) {
  return (
    <Layout>
    <h1>🍺 Liste des bières disponibles</h1>
    <article className={globalStyles.articleLarge}>

      <div className={styles.beerList}>
        {beers.map(({ id, image_url, name, tagline }) => (
          <motion.div whileHover={{ scale: 1.2 }} key={id} className={styles.movie}>
            <div key={id} className={styles.beerContainer}>
              <div className={globalStyles.flexRow+" "+globalStyles.flexCenter}>
                <img src={image_url} alt="" className={styles.beerItem} />
                <div className={globalStyles.flexColumn+" "+globalStyles.flexCenter}>
                  <h4 className={styles.beerName}>{name}</h4>
                  <Link href={'/beer/'+id}>
                    <motion.a whileHover={{ opacity: 0.8 }} className={styles.beerLink}>
                        En savoir plus
                    </motion.a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>)
        )}
      </div>
    </article>
    </Layout>
  );
}