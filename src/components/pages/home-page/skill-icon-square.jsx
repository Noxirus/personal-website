import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import { IceColourPalette } from '../../../library/colorPalette';

const SkillIcon = ({imgRef, altText}) => {

   return (
       <IconImage src= {imgRef} alt = {altText} />);
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
border-color: ${IceColourPalette.primary} ${IceColourPalette.secondary} ${IceColourPalette.grey}
`