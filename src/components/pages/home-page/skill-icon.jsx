import React from 'react';
import styled from 'styled-components';
import { ColourPalette } from '../../../library/colorPalette';

const SkillIcon = ({imgRef, altText}) => {

   return (
       <IconImage title={altText} src= {imgRef} alt = {altText} />);
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
border-color: ${ColourPalette.primary} ${ColourPalette.secondary} ${ColourPalette.grey}
`