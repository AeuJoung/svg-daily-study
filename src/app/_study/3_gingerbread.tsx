import styles from "@/app/_study/shape.module.css"

export default function Gingerbread() {
    return (
        <section className={styles.polygon_shape}>
            <svg width={200} height={200} viewBox="-100 -100 200 200">
                <circle className={styles.head} cx={0} cy={-50} r={30} />
            </svg>
        </section>
    );
}