import styled, { keyframes } from 'styled-components';
import { ColourPalette } from './colorPalette';
import { Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PrimaryText = styled.h1`
font-size: clamp(40px, 8vw, 80px);
color: ${ColourPalette.primary};
`

export const SecondaryText = styled.h2`
font-size: clamp(30px, 6vw, 50px);
color: ${ColourPalette.secondary};
`

export const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 25px);
color: ${ColourPalette.secondary};
`

export const CenteredTitle = styled.h1`
font-size: clamp(30px, 6vw, 60px);
text-align: center;
    color: ${ColourPalette.primary}
`

export const InfoSection = styled(Container)`
    margin-left: auto;
    margin-right: auto;
    padding-top: ${props => props.padding};
`

export const StyledButton = styled(Button)`
    &:hover{
        color: ${ColourPalette.primary};
        border-color: ${ColourPalette.tertiary};
        background-color: ${ColourPalette.dark};
    }

font-size: clamp(10px, 4vw, 25px);
color: ${ColourPalette.dark};
border-color: ${ColourPalette.secondary};
background-color: ${ColourPalette.tertiary};
`


const popIn = keyframes`
  0% {
    transform: scale(0);
  }

  80% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 50px;
  &:hover{
    cursor: pointer;
    color:  ${ColourPalette.primary}
    //TODO add on hover animation and press here
  }
  color: ${props => props.color ? props.color : ColourPalette.dark};
  transform: scale(0);
  animation: ${popIn} 1s linear ${props => props.delay ? props.delay : "0s"};
  animation-fill-mode: forwards
`