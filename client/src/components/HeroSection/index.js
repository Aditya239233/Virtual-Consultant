import React from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, HeroP,  ArrowRight} from './HeroElements'
import {ArrowForward} from './HeroElements'
import { Button } from '../ButtonElement'
import {useState } from "react";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover =() =>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src=
                {Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Consultantions Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account now for easy consultations
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary = 'true'
                    dark = 'true'
                    >
                        Get started {hover ? <ArrowForward /> :<ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
