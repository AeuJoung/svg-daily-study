import styles from "@/app/_study/shape.module.css"


export default function Arrow() {
    return (
        <section className={styles.svgBox}>
            <svg width={200} height={200} viewBox="-100 -100 200 200">
                <path 
                    d="
                        M -70 0
                        L 70 0
                        L 30 -50
                        M 70 0
                        L 30 50"
                    fill="none"
                    stroke="#D1495B"
                    strokeWidth={25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </section> 
    );
}