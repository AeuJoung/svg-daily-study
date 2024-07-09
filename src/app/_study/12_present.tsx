import styles from "@/app/_study/shape.module.css"

export default function Present() {
    return (
        <section className={styles.svgBox}>
            <svg width={200} height={200} viewBox="-100 -100 200 200">
                <path 
                    className={styles.pribbon}
                    d="
                    M 0 -50
                    L 30 -50
                    C 50 -50 50 -70 30 -65
                    L 0 -50"
                    />
                <path 
                    className={styles.pribbon}
                    d="
                    M 0 -50
                    L -30 -50
                    C -50 -50 -50 -70 -30 -65
                    L 0 -50"
                    />
                <circle cx={0} cy={-50} r={10} fill="#a9172a" />

                <rect className={styles.pbox} x={-60} y={-40} width={120} height={100} />
                <rect className={styles.pbox} x={-70} y={-47} width={140} height={20} />
                <rect className={styles.pstripe} x={-20} y={-40} width={40} height={100} />
                <rect className={styles.pstripe} x={-25} y={-47} width={50} height={20} />


            </svg>
        </section>
    );
}