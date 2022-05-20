import { useRouter } from "next/router";
import styled from 'styled-components';
import { PageTitle, BtnText } from '../data/index_content'
import { Hamburger, Menu } from "../comps/Menu";
import React from "react";
import NavBar from "../comps/NavBar";
import { logoData } from "../data/global_content";
// import Image from 'next/image';


const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10em;

    @media only screen and (max-width: 320px) and (max-height: 800px){
        margin-top: 7em;
    }
`

const Em = styled.span`
    color: #6B97ED;
    font-style: normal;
    font-weight: 700;
`

const Logo = styled.img`
    width: 40%;
    height: 40%;

    @media only screen and (max-width: 320px) and (max-height: 800px){
        width: 25%;
        height: 25%;
    }
    @media only screen and (min-width: 1024px) and (min-height: 600px){
        width: 15%;
        height: 15%;
    }
    @media only screen and (min-height: 1024px) {
        width: 30%;
        height: 30%;
    }

`

export default function Home() {

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    const r = useRouter();
    return (
        <LayoutComp>
            <NavBar />
            <div className="menu" ref={node}>
                <Hamburger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <Logo
                src= {logoData.src}
                alt="Timearth Logomark"
               />
            <h1>{PageTitle}</h1>
            <h4>Log your daily activities and see how many <Em>Earth minutes</Em> you have saved today!</h4>
            <div className="background-shape" />
            <button
                className="default"
                onClick={
                    () => {
                        r.push(
                            {
                                pathname: "/intro"
                            }
                        )
                    }
                }>{BtnText}
            </button>
        </LayoutComp>
    )
}