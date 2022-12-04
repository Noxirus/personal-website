import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { InfoSection, ParagraphText, PrimaryText, SecondaryText } from '../../../library/styleLibrary';

const AboutSection = () => {

   return (<InfoSection padding="300px">
    <Row>
        <Col xl="6" md="12">
            
            <SecondaryText>Hello! I am</SecondaryText>
            <PrimaryText>Hamish,</PrimaryText>
            <SecondaryText>Full Stack Developer</SecondaryText>
                
        </Col>
        <Col>
            <PersonalImage alt="Me working here" src="https://picsum.photos/630/300" />
        </Col>
    </Row>
</InfoSection>);
}
export default AboutSection;

const PersonalImage = styled.img`
width: 100%;
height: 300px;
background-repeat: no-repeat;
background-size: contain;
border: 2px solid #e9385a;
`
//TODO this padding on top needs to get smaller based on screen size