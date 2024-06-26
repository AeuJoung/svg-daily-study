import styles from "@/app/_study/shape.module.css"

export default function Sun() {
    return (
        <section className={styles.svgBox}>
            <svg width={200} height={200} viewBox="-15 -15 30 30">
                <circle r={6} />
                <line 
                    stroke="black"
                    strokeWidth = {2}
                    strokeLinecap="round"
                    x1={0} y1={11}
                    x2={0} y2={14}
                />
            </svg>
        </section>
    )
}