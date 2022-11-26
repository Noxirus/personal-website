import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const SkillIcon = ({imgRef, altText}) => {

   return (
       <IconImage src= {imgRef} alt = {altText} />);
}
export default SkillIcon;

const IconImage = styled.img`
border-width: 5px;
border-style: solid;
border-radius: 15px;
width: 75px;
height: 75px;
min-width: 50px;
min-height: 50px;
padding: 5px;
background-color: white;
`