import styles from "@/app/_study/shape.module.css"
import { use } from "react"

export default function Sun() {
    return (<>
        <section className={styles.svgBox}>
            <svg viewBox="-15 -15 30 30">
                <circle r={6} />
                <line 
                    id="ray"
                    stroke="black"
                    strokeWidth = {2}
                    strokeLinecap="round"
                    x1={0} y1={11}
                    x2={0} y2={14}
                />

                {/* id로 요소를 복사해서 사용 가능 */}
                <use 
                    href="#ray"  
                    transform="rotate(45)"
                />
                <use 
                    href="#ray"  
                    transform="rotate(90)"
                />
                <use 
                    href="#ray"  
                    transform="rotate(135)"
                />
                <use 
                    href="#ray"  
                    transform="rotate(180)"
                />
                <use 
                    href="#ray"  
                    transform="rotate(225)"
                />
                <use 
                    href="#ray"  
                    transform="rotate(270)"
                />
                <use 
                    href="#ray"  
                    transform="rotate(315)"
                />
            </svg>
        </section>

        <section className={styles.svgBox}>
            <svg viewBox="-100 -100 200 200">
                <path
                    id="branch" 
                    d="
                        M 0   0 L   0 -90
                        M 0 -20 L  20 -34
                        M 0 -20 L -20 -34
                        M 0 -40 L  20 -54
                        M 0 -40 L -20 -54
                        M 0 -60 L  20 -74
                        M 0 -60 L -20 -74"
                    stroke="#E5C39C"
                    strokeWidth={5}
                />

                <use href="#branch" transform="rotate(60)"  />
                <use href="#branch" transform="rotate(120)"  />
                <use href="#branch" transform="rotate(180)"  />
                <use href="#branch" transform="rotate(240)"  />
                <use href="#branch" transform="rotate(300)"  />
            </svg>
        </section>
        </>
    )
}