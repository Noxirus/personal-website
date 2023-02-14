import styled from 'styled-components';
import { ColorPalette } from './colorPalette';
import { Container, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { popIn } from './animations';

export const PrimaryText = styled.h1`
font-size: clamp(40px, 8vw, 80px);
color: ${ColorPalette.primary};
animation: ${props => props.animation ? props.animation : ""};
${props => props.initialState ? props.initialState : ""};
`

export const SecondaryText = styled.h2`
font-size: clamp(30px, 6vw, 50px);
color: ${ColorPalette.secondary};
animation: ${props => props.animation ? props.animation : ""};
${props => props.initialState ? props.initialState : ""};
`

export const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 25px);
color: ${props => props.colorSet ? props.colorSet : ColorPalette.secondary};
animation: ${props => props.animation ? props.animation : ""};
${props => props.initialState ? props.initialState : ""};
`

export const CenteredTitle = styled.h1`
font-size: clamp(30px, 6vw, 60px);
text-align: center;
color: ${ColorPalette.primary};
animation: ${props => props.animation ? props.animation : ""};
${props => props.initialState ? props.initialState : ""};
`

export const InfoSection = styled(Container)`
    margin-left: auto;
    margin-right: auto;
    padding-top: ${props => props.padding};
`

export const StyledButton = styled(Button)`
    &:hover{
        color: ${ColorPalette.primary};
        border-color: ${ColorPalette.tertiary};
        background-color: ${ColorPalette.dark};
    }

font-size: clamp(10px, 4vw, 25px);
color: ${ColorPalette.dark};
border-color: ${ColorPalette.secondary};
background-color: ${ColorPalette.tertiary};
`

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 50px;
  &:hover{
    cursor: pointer;
    color:  ${ColorPalette.primary}
    //TODO add on hover animation and press here
  }
  color: ${props => props.color ? props.color : ColorPalette.dark};
  transform: scale(0);
  animation: ${popIn} 1s linear ${props => (props.delay && !props.$collapsed) ? props.delay : "0s"};
  animation-fill-mode: forwards
`

export const CenteredCol = styled(Col)`
text-align: center;
`