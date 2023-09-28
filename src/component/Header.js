import React, { useState, useEffect } from 'react';
import { HeaderStyle, HeaderMenu } from "./common.style";
import logoImg from '../images/logo_myport.png';
import { Link } from "react-router-dom";

export default function Header(){
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };
    const headerClassName = isFixed ? 'fixed' : '';
    
    return (
        <HeaderStyle className={headerClassName}>
            <div className="inner">
                <h1 className="logo"><Link to="/"><img src={logoImg} alt="my portfolio 로고" /></Link></h1>
                <nav>
                    <HeaderMenu>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </HeaderMenu>
                </nav>
            </div>
        </HeaderStyle>

    )
    }