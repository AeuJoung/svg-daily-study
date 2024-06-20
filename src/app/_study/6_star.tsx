import styles from "@/app/_study/shape.module.css"

export default function Star() {
    return (
        <section className={styles.svgBox}>
            <svg width={200} height={200} viewBox="-100 -100 200 200">
                <g transform="translate(0 5)"> {/* 5픽셀만큼 아래로 내림 */}
                    <g>
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                    <g transform="rotate(72)"> {/* 회전은 좌표계의 영점을 중심으로. */}
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                    <g transform="rotate(-72)">
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                    <g transform="rotate(144)">
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                    <g transform="rotate(-144)">
                        <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
                        <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
                    </g>
                </g>
            </svg>
        </section>
    );
}