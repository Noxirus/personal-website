import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ColourPalette } from '../../../library/colorPalette';
import { IsInViewport } from '../../../library/functionLibrary';
import { flipIcon } from '../../../library/animations';

const SkillIcon = ({imgRef, altText, delay}) => {
    const iconRef = useRef(null);
    const [isListening] = useState(IsInViewport(iconRef));

    return (
       <IconImage trigger={(isListening.GetIsIntersecting())} ref={iconRef} delay={delay} title={altText} src= {imgRef} alt = {altText} />);
}
export default SkillIcon;

const IconImage = styled.img`
border-width: 2px;
border-style: solid;
border-radius: 15px;
width: 75px;
height: 75px;
min-width: 50px;
min-height: 50px;
margin: 5px;
padding: 5px;
background-color: white;
border-color: ${ColourPalette.primary} ${ColourPalette.secondary} ${ColourPalette.grey};
transform: scale(1, 1);
animation: ${props => (props.trigger) && css`${flipIcon} .3s linear ${props => props.delay ? props.delay : "0s"}`};
animation-fill-mode: forwards;
`