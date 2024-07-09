import styles from "@/app/_study/shape.module.css"

export default function WindMill () {
    return (
        <section className={styles.svgBox}>
            <svg width={200} height={200} viewBox="-100 -200 200 400" fill="rgba(0, 0, 0, 0.5)">
                <g transform="translate(0, -50)">
                    <g id="windmill-head" className={styles.windmill_head}>
                        <circle r={8} />
                        <path 
                        id="arm" 
                        d="M -7 -20 C -7 -10 7 -10 7 -20 L 2 -80 L -2 -80" />
                        <use href="#arm" transform="rotate(+120)" />
                        <use href="#arm" transform="rotate(-120)" />
                    </g>
                </g>
                <path d="M -7 100 L 7 100 L 3 -35 L -3 -35" />
            </svg>
        </section>
    );
}