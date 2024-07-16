import styles from "./page.module.css";
import BasicShape from "./_study/1_basic-shapes";
import PolygonShape from "./_study/2_polygon";
import Gingerbread from "./_study/3_gingerbread";
import House from "./_study/4_house";
import Arrow from "./_study/5_Arrow";
import Star from "./_study/6_star";
import Clock from "./_study/7_clock";
import Sun from "./_study/8_sun";
import Forest from "./_study/9_forest";
import WindMill from "./_study/10_windmill";
import Btree from "./_study/11_btree";
import Present from "./_study/12_present";
import Bell from "./_study/13_bell";
import ArcCain from "./_study/14_arccain";
import Bear from "./_study/15_bear";
import SnowMan from "./_study/16_snowman";

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
          <Sun />
          <Forest />
          <WindMill />
          <Btree />
          <Present />
          <Bell />
          <ArcCain />
          <Bear />
          <SnowMan />
        </section>
    </main>
  );
}
