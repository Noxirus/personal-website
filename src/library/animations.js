import styled, { keyframes } from 'styled-components';

export const flipIcon = keyframes`
    0%{
        transform: scale(-1, 1);
    }
    100%{
        transform: scale(1, 1);
    }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const changeColour = (color) => keyframes`
  from {
    color: black;
  }
  to {
    color: ${color};
  }
`

export const popIn = keyframes`
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

export const shake = keyframes`
10% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(-10deg);
  }
  80% {
    transform: rotate(-10deg);
  }
  90% {
    transform: rotate(-10deg);
  }
  100%{
    transform: rotate(10deg);
  }
`

export const AnimationRef = styled.div`
animation: ${props => changeColour(props.colorchange)} 2s;
animation-fill-mode: forwards;
`