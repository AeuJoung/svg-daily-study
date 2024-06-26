"use client"

import styles from "@/app/_study/shape.module.css"
import { useEffect, useRef } from "react";

export default function Clock() {
    const hoursElement = useRef<SVGLineElement>(null);
    const minutesElement = useRef<SVGLineElement>(null);
    const secondElement = useRef<SVGLineElement>(null);
    const interval = useRef<NodeJS.Timeout>();

    useEffect(()=>{
        interval.current = setInterval(()=>{
            console.log("Ddd");
            const hour = Number(new Date().getHours() % 12);
            const minute = Number(new Date().getMinutes());
            const second = Number(new Date().getSeconds());
            if (hoursElement.current && minutesElement.current && secondElement.current) {
                hoursElement.current.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
                minutesElement.current.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
                secondElement.current.setAttribute("transform", `rotate(${(360 / 60) * second})`);
            }
        }, 1000);
        return ()=>{
            clearInterval(interval.current);
        }        
    });

    return (
        <section className={styles.svgBox}>
            <svg width={200} height={200} viewBox="-100 -100 200 200">
                <rect x={-100} y={-100} width={200} height={200} fill="#CD803D" />

                <circle r="55" stroke="#FCCE7B" strokeWidth="10" fill="white" />

                <circle r={45} stroke="#66705F" strokeWidth={6} strokeDasharray="6 17.56194490192345" strokeDashoffset={3} fill="none" /> 
                {/*offset은 시작점 세팅
                    리액트는 DOM 속성 카멜 케이스로 작성.
                    */}
                
                <g stroke="#5f4c6c" strokeLinecap="round">
                    <line className={styles.hours} ref={hoursElement} y2="-20" strokeWidth={8} /> {/* x1, y1은 선언하지 않으면 자동으로 0,0이 된다. */}
                    <line className={styles.minutes} ref={minutesElement} y2="-30" strokeWidth={6} />
                    <line className={styles.second} ref={secondElement} y2="-35" strokeWidth={2} />
                </g>
            </svg>
        </section>
    )
}