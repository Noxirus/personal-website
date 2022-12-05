import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { ColourPalette } from '../../../library/colorPalette';
import { CenteredTitle, InfoSection, PrimaryText, SecondaryText } from '../../../library/styleLibrary';
import Headshot from "../../../Images/HamishHeadshot.png";

const AboutSection = () => {

   return (<InfoSection padding="250px">
    <Row>
        <Col>
            <CenteredTitle>About</CenteredTitle>
        </Col>
    </Row>
    <br />
    <Row>
        <StyledAboutCol xl="6" md="12">
            <ParagraphText>
                My name is Hamish and I love building software. Originally studied Linguistics with a Musical Minor at the University of Calgary.
                After a few years of Administrative assistant work I decided I wanted a career change. 
            </ParagraphText>
            <ParagraphText>
                I attended the Object Oriented Software Development fast track program at SAIT. During that time I learned: C#, Javascript, HTML, CSS, Java, Android Studio, SQL Server,
                OracleDB, Python, Raspberry Pi, VMWare along with security best practices.
            </ParagraphText>
            <ParagraphText>
                Professionally I worked at an indie company called Deleptual. During my two years there I helped build multiple virtual team building experiences. This was using the 
                Unity Engine and WebGL format so it works within browsers. I also had an opportunity to design and develop a few mobile game prototypes and even released one publicly on 
                the Google Play Store. Finally I helped build two live websites front end and back end using React/Firebase.
            </ParagraphText>
            <ParagraphText>
                In my recent free time I have been learning new technologies involving the Unreal Engine/C++, Typescript and 3D modelling using Blender.
                Looking forward to seeing the differences between the two major Engines.
            </ParagraphText>      
        </StyledAboutCol>
        <Col>
            <PersonalImage alt="Hamish Harrison" src={Headshot} />
        </Col>
    </Row>
</InfoSection>);
}
export default AboutSection;

const StyledAboutCol = styled(Col)`

margin: auto;

`

const PersonalImage = styled.img`
width: 80%;
text-align: center;
background-repeat: no-repeat;
background-size: contain;
border: 2px solid ${ColourPalette.tertiary};
`

export const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 18px);
color: ${ColourPalette.tertiary};
`
//TODO this padding on top needs to get smaller based on screen size