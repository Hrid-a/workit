
import  Cards  from "@/components/Cards";
import styles from "./page.module.css";
import Decoration from "@/components/Decoration";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section className={styles.wrapper}>
      <h1 className={styles.heading}>
        app <span>Tailored</span> to <br />
        your needs
      </h1>
      <a className={styles.button}>learn more</a>
      </section>
        <Decoration bgColor="var(--color-gray-600)" />
      <Features/>
      <Cards />
      <Footer />
    </main>
  );
}
