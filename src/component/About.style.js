import styled from '@emotion/styled'
import { customStyles } from './custom.style';
const { size, weight } = customStyles.font;
const {flexOpt, MediaWidth, FullFixed, Transition } = customStyles;

export const AboutWrap = styled.div`
    background:#000;
    .section_wrap{
        position:relative;
        background:linear-gradient(0deg,#5e1530,#152944);
    }
`
export const Skill = styled.div`
    position:relative;
    padding-bottom:40px;
}
`
export const StarsAni = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    bottom:0;
    left:0;
    overflow:hidden;
    .stars{
        position: absolute; width:100%; height: 100%; top:0; left: 0; opacity: 0;
        &.stars-animation{animation:stairs 9s linear infinite;}
        &.stars-animation-two{animation:stairs 9s linear infinite; animation-delay: 3s;}
        &.stars-animation-three{animation:stairs 9s linear infinite; animation-delay: 6s;}
    }
`
export const SkillItems  = styled.div`
    position:relative;
    z-index:10;
    text-align: center; 
    margin:20px auto;
    .skill_list{
        display: flex;
        flex-wrap:wrap;
        li{
            width:25%; 
            height: 210px; 
            padding-bottom: var(--content-pd); 
            cursor: pointer; 
            position: relative;
            .front{
                transform: rotateY(0deg); 
                opacity: 0;
            }
            .back{
                position: absolute; top:0; left: 0;  color:#111; background-color: #fff; transform: rotateY(-180deg); opacity: 0;
            }
            &:hover{
                .front{transform: rotateY(-180deg); opacity: 0;}
                .back{transform: rotateY(0deg); opacity: 1;}
                .back:after{position: absolute; top: -7px; left: -7px; width: 100%; height: 100%; padding: 7px;border-radius: 50%; box-shadow: 0 0 0 4px #fff; content: '';} 
            }
            &>div{
                display: table; width: 210px; height: 210px; border-radius: 50%; font-size: 1.5rem; text-align: center; color:#fff; background: rgba(255,255,255,0.1); 
                ${Transition.sec5}
                span{
                    display: table-cell; 
                    vertical-align: middle;
                }
            }
            @media screen and (max-width: ${MediaWidth.pc}) {
                width:50%;
                &>div{
                    margin:0 auto;
                    span{
                        ${size.ft16}
                    }
                }
                .back{
                    left:27%;
                }
            }
            @media screen and (max-width: ${MediaWidth.tablet}) {
                width:100%;
                height:auto;
                padding-bottom:24px;
                &:hover{
                    .front{
                        transform: rotateY(0deg); 
                    }
                    .back{
                        display:none;
                    }
                }
            }
        }
    }
`
export const AboutSec = styled.section`
    text-align:center;
    .title{
        margin-bottom:20px;
        color:#fff;
        ${size.ft28}
        text-align:center;
        text-transform:uppercase;
    }
`
export const AboutItems = styled.ul`
    width:450px;
    margin:0 auto;
    padding-bottom:30px;
    li{
        margin-bottom:15px;
        padding:20px 15px;
        border-radius:50px;
        background-color:#fff;
        ${size.ft16}
        text-transform:uppercase;
    }
`