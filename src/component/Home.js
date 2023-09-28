import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { HomeStyle, ToMain, BgImage } from "./Home.Style";
import bgMedical from '../images/doctor.png';
import bgBank from '../images/bank_bottom.png';
import bgHome from '../images/home1.png';
import bgTravel from '../images/travel.png';

export default function Home(){
    useEffect(() => {
        const HeaderEl = document.querySelector('.home');
        HeaderEl.classList.add('on');
    }, []); 
        return (
            <HomeStyle className="home">
                <div className="home_text">
                    <h1 className="title animated fadeInLeft s1">Web
                        <div className="message_wrap"> 
                        <div className="message">
                            <div>Coding</div>
                            <div>Creating</div>
                            <div>UI/UX</div>
                        </div>
                        </div>
                        <div className="mb">Publisher</div>
                    </h1>
                </div>
                <ToMain>
                    <Link to="/">
                        <span className="txt">메인으로 가기</span>
                        <span className="line1"></span><span className="line2"></span><span className="line3"></span><span className="line4"></span>
                    </Link>
                    <span className="desc">Made with React</span>
                </ToMain>
                <BgImage>
                    <span className="img type1"><img src={bgMedical} alt=""/></span>
                    <span className="img type4"><img src={bgBank} alt="" /></span>
                    <span className="img type2"><img src={bgHome}  alt="" /></span>
                    <span className="img type3"><img src={bgTravel} alt=""/></span>
                </BgImage>
            </HomeStyle>

        )
    }