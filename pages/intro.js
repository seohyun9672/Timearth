import styled from 'styled-components';
import CateGrid from '../comps/CateGrid'
import { PageTitle, BtnText } from '../data/intro_content';
import { useRouter } from 'next/router';
import { Hamburger, Menu } from "../comps/Menu";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "../comps/NavBar";
import { logoData, color } from '../data/global_content';
import CountUp from 'react-countup';
import { slideInLeft, slideInRight, fadeIn } from '../data/animation';

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7em;

    @media only screen and (max-width: 320px) and (max-height: 800px){
        margin-top: 4em;
    }
`
const Header = styled.h1`
    animation: ${props => props.slide} 1s;
    animation-delay: ${props => props.delay || "0s"};
`

const SubHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    margin-bottom: 1em;
    margin: auto;
    width: fit-content;
    animation: ${props => props.fade} 1s;
    animation-delay: ${props => props.delay || "0s"};
    
    @media only screen and (min-width: 1024px) and (min-height: 600px){
        width: 30%;
        height: 30%;
    }
    @media only screen and (min-height: 1024px) {
        width: 40%;
        height: 40%;
    }
`

const Em = styled.span`
    color: ${props => props.color};
    font-style: normal;
    font-weight: 700;
`

const Logo = styled.img`
    width: 10vw;
    height: 10vh;

    @media only screen and (min-height: 1024px) {
        width: 8vw;
        height: 8vh;
    }
`

const EarthMin = styled.div`
    font-family: 'Oxanium';
    text-transform: uppercase;
    font-weight: 400;
    font-size: 24pt;
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 320px) and (max-height: 800px){
        font-size: 20pt;
    }
`

const H1 = styled.h1`
    animation: ${props => props.slide} 1s;
    animation-delay: ${props => props.delay || "0s"};
`
const H4 = styled.h4`
    animation: ${props => props.slide} 1s;
    animation-delay: ${props => props.delay || "0s"};
`


export const Button = styled.button`
    bottom: 8.77%;
    position: absolute;
`

export default function Intro(arr = []) {

    const [open, setOpen] = useState(false);
    const node = useRef();
    const [intro, setIntro] = useState(true);

    const r = useRouter();

    return (
        <LayoutComp>
            <NavBar />
            <div className="menu" ref={node}>
                <Hamburger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            {intro ? <div>
                <Header slide={slideInLeft}>{PageTitle[0]}</Header>
                <SubHeader fade={fadeIn}>
                    <Logo src={logoData.src} />
                    <EarthMin>
                        <CountUp
                            start={0.00}
                            end={10}
                            duration={.5}
                            decimal={2}
                        >
                            {({ countUpRef, start }) => (
                                <strong ref={countUpRef} />
                            )}
                        </CountUp>
                        <div>minutes</div>
                    </EarthMin>
                </SubHeader>
                <H4 slide={slideInRight}>Here on Timearth, <br /><Em color={color.primaryOrange}>Earth minutes</Em> refer to the number of minutes your actions can add to the Earth&apos;s lifespan.</H4>
                <H4 slide={slideInRight}>After you complete the questionnaire, you will receive your results in <Em color={color.primaryOrange}>Earth minutes</Em>, like the example shown above.</H4>
            </div> : <div>
                <H1 slide={slideInLeft}>{PageTitle[1]}</H1>
                <H4 slide={slideInRight}>Now let&apos;s see how many <Em color={color.primaryOrange}>minutes</Em> you are adding to the Earth&apos;s lifespan! <br></br>Complete our <Em color={color.primaryOrange}>12-question quiz</Em> on the following categories:</H4>
                <CateGrid />
            </div>}
            {
                intro ? <Button
                    className='primary large'
                    onClick={
                        () => {
                            setIntro(!intro)
                        }
                    }
                >{BtnText[0]}</Button> : <Button
                    className='primary large'
                    onClick={
                        () => {
                            r.push(
                                {
                                    pathname: "/questions"
                                }
                            )
                        }
                    }
                >{BtnText[1]}</Button>
            }
        </LayoutComp>
    )
}