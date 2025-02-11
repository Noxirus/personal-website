import React from 'react';
import styled from 'styled-components';
import { ColorPalette } from '../../../library/colorPalette';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ZIndexCol } from '../../../library/styleLibrary';

const CardDetails = ({details}) => {
  
   return (<ZIndexCol>
    {details.link && <Title>{details.title}<PopOutIcon icon={faUpRightFromSquare} onClick={() => window.open(details.link)} /></Title>}
    {!details.link && <Title>{details.title}</Title>}
    <SecondaryText>
      Roles: {details.roles}
    </SecondaryText>
    <SecondaryText>
      {details.tech}
    </SecondaryText>
    <ParagraphText>
      {details.description}
    </ParagraphText>
</ZIndexCol>);
}

export default CardDetails;

const Title = styled.h1`
font-size: clamp(20px, 3vw, 30px);
color: ${ColorPalette.tertiary};
`

const SecondaryText = styled.h2`
font-size: clamp(15px, 2vw, 20px);
color: ${ColorPalette.primary};
`

const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 25px);
color: ${ColorPalette.secondary};
text-align: ${props => props.centered ? "center" : ""};
`

const PopOutIcon = styled(FontAwesomeIcon)`
min-width: 50px;
margin-left: 10px;
&:hover{
  cursor: pointer;
  color: ${ColorPalette.primary}
}
`
