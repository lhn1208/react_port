import { SecTittle, Section } from "./common.style";
import ImgIntro1 from '../images/intro/img_myport1.jpg';
import ImgIntro2 from '../images/intro/img_myport2.jpg';
import { Article } from "./Home.Style";
export default function Introduce(){
    return (
        <Section>
            <SecTittle>Introduce</SecTittle>
            <Article>
                <div><img src={ImgIntro1} alt="포트폴리오 소개 이미지"></img></div>
                <div className="desc">
                <p>포트폴리오 데이터를 가져오기 위해 `import` 문을 사용합니다. 이 데이터는 `portData` 변수에 저장됩니다.</p>

<p>사용자가 선택한 `activeFilter` 값에 따라 포트폴리오 항목을 필터링합니다. 만약 `activeFilter`가 "All"이면, 모든 항목을 표시합니다. 그렇지 않으면, 선택한 기기 유형 (예: "pc", "mobile", "responsive", "pc/mobile")에 따라 데이터를 필터링합니다.</p>


                     
                </div>
            </Article>
            <Article>
                <div><img src={ImgIntro2} alt="포트폴리오 소개 이미지"></img></div>
                <div className="desc">
                    <p>필터링된 데이터를 사용하여 각 항목을 렌더링합니다. 이를 위해 `map` 함수를 사용하여 데이터 배열을 반복하고, 각 항목을 `&lt;li&gt;` 요소로 렌더링하여 화면에 출력합니다.</p>

    <p>항목 중에서 `PortFigure` 컴포넌트에 `only_mb_img` 속성이 `true`인 경우, 해당 항목에만 "only_mb_img" 클래스가 추가됩니다.</p>
                </div>
            </Article>
        </Section>
    )
}