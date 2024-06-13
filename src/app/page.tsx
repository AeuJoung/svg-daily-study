import Image from "next/image";
import styles from "./page.module.css";
import BasicShape from "./_study/1_basic-shapes";

//https://svg-tutorial.com/

export default function Home() {
  return (
    <main className={styles.main}>
        <section className={styles.svgContainer}>
          <BasicShape />
        </section>
    </main>
  );
}
