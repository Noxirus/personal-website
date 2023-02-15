import React from 'react';
import { Row, Col } from 'reactstrap';
import styled, { css } from 'styled-components';
import { fadeIn } from '../../../library/animations';
import { ColorPalette } from '../../../library/colorPalette';
import { AutoMarginContainer, ParagraphText, PrimaryText, SecondaryText } from '../../../library/styleLibrary';

const initialState = css `opacity: 0; animation-fill-mode: forwards;`
const animationString = css `${fadeIn} .5s linear ${props => props.delay ? props.delay : "0s"}`;

const IntroductionSection = () => {
   return (<AutoMarginContainer padding="250px">
    <Row>
        <StyledAboutCol xl="6" lg="7" md="12">       
            <SecondaryText initialState={initialState} animation={animationString} delay="0s">Hello! I am</SecondaryText>
            <PrimaryText initialState={initialState} animation={animationString} delay=".3s">Hamish,</PrimaryText>
            <SecondaryText initialState={initialState} animation={animationString} delay="1s">Full Stack Developer</SecondaryText>
            <ParagraphText 
                colorSet={ColorPalette.tertiary} 
                initialState={initialState} 
                animation={animationString} 
                delay="1.5s">
                    Currently exploring employment opportunities
            </ParagraphText>        
        </StyledAboutCol>
        <Col />
    </Row>
</AutoMarginContainer>);
}
export default IntroductionSection;

const StyledAboutCol = styled(Col)`
margin: auto;
`
