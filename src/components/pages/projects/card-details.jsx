import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import { ColourPalette } from '../../../library/colorPalette';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardDetails = ({details}) => {

   return (<TextCol>
    <Title>{details.title}<PopOutIcon icon={faUpRightFromSquare} onClick={() => window.open(details.link)} /></Title>
    <SecondaryText>
      Roles: {details.roles}
    </SecondaryText>
    <SecondaryText>
      {details.tech}
    </SecondaryText>
    <ParagraphText>
      {details.description}
    </ParagraphText>
</TextCol>);
}
export default CardDetails;

const Title = styled.h1`
font-size: clamp(20px, 3vw, 30px);
color: ${ColourPalette.black};
`

const SecondaryText = styled.h2`
font-size: clamp(15px, 2vw, 20px);
color: ${ColourPalette.primary};
`
const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 25px);
color: ${ColourPalette.dark};

text-align: ${props => props.centered ? "center" : ""};
`

const PopOutIcon = styled(FontAwesomeIcon)`
  min-width: 50px;
  margin-left: 10px;

  &:hover{
    cursor: pointer;
  }
`

const TextCol = styled(Col)`

`