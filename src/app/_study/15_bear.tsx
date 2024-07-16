import styles from "@/app/_study/shape.module.css"

export default function Bear() {
    return (
        <main className={styles.main}>
            <svg className={styles.bear} width={200} height={200} viewBox="-100 -100 200 200" >
                <circle className={styles.ear} cx={-40} cy={-50} r={18} />
                <circle className={styles.ear} cx={40} cy={-50} r={18} />
                <rect 
                    className={styles.face}
                    x={-55} y={-60}
                    width={110} height={120}
                    rx={50} ry={30}
                />
                <circle cx="20" cy="-30" r="3" />
                <circle cx="-20" cy="-30" r="3" />
                
                <path
                    d="
                        M -30 0
                        C -30 -25 30 -25 30 0
                        L 30 30
                        Q 30 40 20 40
                        L -20 40
                        Q -30 40 -30 30
                    "
                    fill="#E5C39C"
                />

                <path 
                    d="
                        M -10 0
                        L 10 0
                        C 10 20 -10 20 -10 0
                    "
                />
                <path 
                    className={styles.mouth}
                    d="
                        M 0 10
                        Q 0 25 10 25
                        M 0 10
                        Q 0 25 -10 25
                    "
                />
            </svg>
        </main>
    );
}