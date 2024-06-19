import styles from "@/app/_study/shape.module.css"

export default function PolygonShape() {
    return (
        <>
            <section className={styles.svgBox}>
                <svg viewBox="-100 -150 200 350">
                    <polygon points="0,0 80,120 -80,120" fill="#234236"/>
                    <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C"/>
                    <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
                    <rect x={-20} y={120} width={40} height={30} fill="brown"></rect>
                </svg>
            </section>
        </>
    );
}