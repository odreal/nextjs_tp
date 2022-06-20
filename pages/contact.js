import Layout from "../components/layout";
import styles from "../styles/Contact.module.css";
import { motion } from 'framer-motion';


export default function Contact() {
return (
    <Layout>
        <h1>📧 Formulaire de contact</h1>
        <article>
            <h3>Utilisez le formulaire de contact ci-dessous pour m'envoyer un message !</h3>
            <form
            className={styles.form}
            action="https://formspree.io/f/mwkyjkap"
            method="POST"
            >
            <label className={styles.formContainer}>
                <span>Email :</span>
                <input className={styles.inputField} required type="email" name="email"/>
            </label>
            <label className={styles.formContainer}>
                <span>Message :</span>
                <textarea className={styles.inputField} required name="message"></textarea>
            </label>
            <motion.button whileHover={{ opacity: 0.8}} className={styles.buttonSubmit} type="submit">Envoyer</motion.button>
            </form>
        </article>
    </Layout>
);
}