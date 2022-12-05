import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { ColourPalette } from '../../../library/colorPalette';
import { InfoSection, PrimaryText, SecondaryText } from '../../../library/styleLibrary';
import Headshot from "../../../Images/HamishHeadshot.png";

const IntroductionSection = () => {

   return (<InfoSection padding="250px">
    <Row>
        <StyledAboutCol xl="6" md="12">
            
            <SecondaryText>Hello! I am</SecondaryText>
            <PrimaryText>Hamish,</PrimaryText>
            <SecondaryText>Full Stack Developer</SecondaryText>
            <ParagraphText>Currently looking for opportunities!</ParagraphText>
                
        </StyledAboutCol>
        <Col>
        </Col>
    </Row>
</InfoSection>);
}
export default IntroductionSection;

const StyledAboutCol = styled(Col)`

margin: auto;

`

export const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 25px);
color: ${ColourPalette.tertiary};
`
//TODO this padding on top needs to get smaller based on screen size