import Image from "next/image";
import styles from "./page.module.css";
import BasicShape from "./_study/1_basic-shapes";
import PolygonShape from "./_study/2_polygon";
import Gingerbread from "./_study/3_gingerbread";
import House from "./_study/4_house";
import Arrow from "./_study/5_Arrow";
import Star from "./_study/6_star";
import Clock from "./_study/7_clock";

//https://svg-tutorial.com/

export default function Home() {
  return (
    <main className={styles.main}>
        <section className={styles.svgContainer}>
          <BasicShape />
          <PolygonShape />
          <Gingerbread />
          <House />
          <Arrow />
          <Star />
          <Clock />
        </section>
    </main>
  );
}
