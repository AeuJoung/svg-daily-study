import styles from "@/app/_study/shape.module.css"

export default function BasicShape() {
    //width 속성과 height 속성은 브라우저에서 이미지가 차지하는 공간.
    //viewBox는 이미지의 좌표계를 정의. 처음 두 값은 이미지의 왼쪽 상단 좌표를 정의. 마지막 두 값은 이미지의 뷰포트에서의 크기를 정의.
    return (
        <>
            <section className={styles.first_shape}>
                <svg width={200} height={200} viewBox='-100 -100 200 200'>
                    <circle cx={0} cy={20} r={70} fill="#D1495B"></circle>
                    <rect x={-17.5} y={-65} width={35} height={20} fill="#f79259"></rect>
                    <circle cx={0} cy={-75} r={12} fill="none" stroke="#f79259" strokeWidth={2}></circle>
                </svg>
            </section>
        </>
    );
}