import React from 'react';
import { Row, Col } from 'reactstrap';
import styled, { css } from 'styled-components';
import { fadeIn } from '../../../library/animations';
import { AutoMarginContainer, PrimaryText, SecondaryText } from '../../../library/styleLibrary';

const initialState = css `opacity: 0; animation-fill-mode: forwards;`
const animationString = css `${fadeIn} .5s linear ${props => props.delay ? props.delay : "0s"}`;

const IntroductionSection = () => {
   return (<AutoMarginContainer id="introduction" padding="250px">
    <Row>
        <StyledAboutCol xl="6" lg="7" md="12">       
            <SecondaryText initialState={initialState} animation={animationString} delay="0s">Hello! I am</SecondaryText>
            <PrimaryText initialState={initialState} animation={animationString} delay=".5s">Hamish,</PrimaryText>
            <SecondaryText initialState={initialState} animation={animationString} delay="1s">Game Developer,</SecondaryText>
            <SecondaryText initialState={initialState} animation={animationString} delay="1.5s">Teacher and Director</SecondaryText>     
        </StyledAboutCol>
        <Col />
    </Row>
</AutoMarginContainer>);
}
export default IntroductionSection;

const StyledAboutCol = styled(Col)`
margin: auto;
`
