import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const SkillIcon = ({imgRef, altText}) => {

   return (
        <IconImage src= {imgRef} alt = {altText} />);
}
export default SkillIcon;

const SquareStyle = styled(Col)`

`

const IconImage = styled.img`
//Add rounded border
//Color?
//Props for alternating details?
border-width: 5px;
border-style: solid;
border-radius: 15px;
max-width: 100px;
padding: 5px;
`