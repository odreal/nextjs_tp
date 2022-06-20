import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import globalStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Bibliothèque ambrée";
export const siteTitle = "Bibliothèque ambrée";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
            <a>
            <Image className={styles.logo}
                priority
                src="/images/biere.png"
                height={50}
                width={50}
                alt={name}
            />
            </a>
        </Link>
        <h2 className={styles.navLink}>
            <Link href="/">
            <a className={globalStyles.colorInherit}>{name}</a>
            </Link>
        </h2>
        <h2 className={styles.navLink}>
            <Link href="/cgu">
            <a className={globalStyles.colorInherit}>Mentions légales</a>
            </Link>
        </h2>
        <h2 className={styles.navLink}>
            <Link href="/beers">
            <a className={globalStyles.colorInherit}>Liste des bières</a>
            </Link>
        </h2>
        <h2 className={styles.navLink}>
            <Link href="/contact">
            <a className={globalStyles.colorInherit}>Formulaire de contact</a>
            </Link>
        </h2>
      </header>
      <main>{children}</main>
    </div>
  );
}
