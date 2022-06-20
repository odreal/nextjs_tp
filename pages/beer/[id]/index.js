import axios from "axios";
import Layout from "../../../components/layout";
import styles from "../../../styles/BeerItem.module.css";
import globalStyles from "../../../styles/utils.module.css";

export async function getStaticPaths() {
  const { data } = await axios.get(
    `https://api.punkapi.com/v2/beers?per_page=80`
  );

  return {
    paths: data.map(({ id }) => `/beer/${id}`),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const { data } = await axios.get(
    `https://api.punkapi.com/v2/beers/${id}`
  );

  return {
    props: {
      beer: data[0]
    }
  };
}

export default function BeerItem({ beer }) {
  return (
    <Layout>
      <h1>🍺 {beer.name}</h1>
      <article className={globalStyles.articleMedium}>
        <div className={globalStyles.flexRow+" "+globalStyles.flexAround+" "+styles.beerContainer}>
          <img className={styles.beerImg} src={beer.image_url} alt="" />
          <div className={globalStyles.flexColumn+" "+styles.containerHalfSize}>
            <h3>{beer.name}</h3>
            <p className={styles.beerDescription}>{beer.description}</p>
            <p>🥴 Alc.{beer.abv}%</p>
            <div>
              <p>Bière idéale pour manger :</p>
              <ul>
              {beer.food_pairing.map((el, id) => (
                <li  key={id}>🍽️ {el}</li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
