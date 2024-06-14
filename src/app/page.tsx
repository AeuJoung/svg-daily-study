import Image from "next/image";
import styles from "./page.module.css";
import BasicShape from "./_study/1_basic-shapes";
import PolygonShape from "./_study/2_polygon";
import Gingerbread from "./_study/3_gingerbread";

//https://svg-tutorial.com/

export default function Home() {
  return (
    <main className={styles.main}>
        <section className={styles.svgContainer}>
          <BasicShape />
          <PolygonShape />
          <Gingerbread />
        </section>
    </main>
  );
}
