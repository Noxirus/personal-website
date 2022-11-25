import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const SkillIcon = ({imgRef, altText}) => {

   return (
       <SquareStyle><IconImage src= {imgRef} alt = {altText} /></SquareStyle>);
}
export default SkillIcon;

const SquareStyle = styled(Col)`

`

const IconImage = styled.img`
border-width: 5px;
border-style: solid;
border-radius: 15px;
min-width: 80px;
width: 100px;
padding: 15px;
`