import styles from "@/app/_study/shape.module.css"

export default function SnowMan() {
    return (
        <main className={styles.main}>
            <svg width={200} height={200} viewBox="-100 -100 200 200" >
                <defs>
                    <radialGradient
                        id="shine"
                        cx={0.25} cy={0.25} r={0.35} >
                            <stop offset="0%" stopColor="#e3a8b0" />
                            <stop offset="100%" stopColor="#d1495b" />
                    </radialGradient>
                </defs>

                <circle cx={0} cy={20} r={70} fill="#D1495B" />
                <circle cx={0} cy={-75} r={12} fill="none" stroke="#F79257" strokeWidth={2} />
                <rect x={-17.5} y={-65} width={35} height={20} fill="#F79257" />
            </svg>
        </main>
    );
}