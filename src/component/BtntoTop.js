import { BtntoTopStyle } from "./common.style";
import React, { useState } from 'react';

export default function BtntoTop(){
    const [isVisible, setIsVisible] = useState(false);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        // 페이지의 스크롤 위치를 가져옵니다.
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // 스크롤 위치가 일정 이상일 때 버튼을 표시하고 그렇지 않을 때는 숨깁니다.
        if (scrollTop > 200) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // 버튼 클릭 이벤트 핸들러
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth', // 부드러운 스크롤 효과를 추가할 수 있습니다.
        });
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    return (
     <BtntoTopStyle  className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
          <i>위로가기</i>
     </BtntoTopStyle>

    )
}