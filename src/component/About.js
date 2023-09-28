import React, { useState, useEffect } from 'react';
import { AboutWrap, Skill, SkillItems, StarsAni, AboutSec, AboutItems } from "./About.style";
import { SecTittle, Section } from "./common.style";
import bgStar from '../images/background.png';
export default function About(){
    useEffect(() => {
     

    }, []); 

    return (
     <AboutWrap>
        <div className="section_wrap">
            <Section>
                <Skill>
                    <SecTittle white>SKILL</SecTittle>
                    <SkillItems>
                        <ul className="skill_list">				
                            <li>
                            <div className="front s1 bounce animated"><span>HTML5/CSS3/SASS</span></div>
                            <div className="back"><span>W3C에 준수하는 웹표준</span></div>
                            </li>
                            <li>
                            <div className="front s1_4 bounce animated"><span>Jquery/Javascript</span></div>
                            <div className="back"><span>스크립트<br />동작 구현</span></div>
                            </li>
                            <li>
                            <div className="front s1_6 bounce animated"><span>반응형웹</span></div>
                            <div className="back"><span>전 기기 반응하는<br />반응형</span></div>
                            </li>
                            <li>
                            <div className="front s1_8 bounce animated"><span>웹접근성</span></div>
                            <div className="back"><span>모두 접근 가능한<br />접근성</span></div>
                            </li>
                        </ul>
                    </SkillItems>
                </Skill>
            </Section>
            <StarsAni>
                <img className="stars stars-animation" src={bgStar} alt="" />
                <img className="stars stars-animation-two" src={bgStar} alt="" />
                <img className="stars stars-animation-three" src={bgStar} alt="" />
            </StarsAni>
        </div>
        <AboutSec>
            <SecTittle white>About</SecTittle>
            <h3 className='title'>My Info</h3>
            <AboutItems>
                <li><strong>Name:</strong>&nbsp;이 하 나</li>
                <li><strong>Email:</strong>&nbsp;lhn1208@naver.com</li>
                <li className="tools"><strong>Tools:</strong>&nbsp;VsCode/Git/figma/<span className="mb-block">/Websquare</span></li>
            </AboutItems>	
              <h3 className='title'>Career</h3>
            <AboutItems>
                <li><strong>ITANS</strong>/IT Company</li>
                <li><strong>온앤온정보시스템</strong>/IT Company</li>
                <li><strong>애드캡슐소프트</strong>/Web Agency</li>
                <li><strong>모두투어</strong>/Travel Company</li>
                <li><strong>IDS&amp;Trust</strong>/Dawoong Group</li>
            </AboutItems>	
        </AboutSec>
     </AboutWrap>

    )
}