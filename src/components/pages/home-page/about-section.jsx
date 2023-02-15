import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { ColorPalette } from '../../../library/colorPalette';
import { BackgroundRow, CenteredTitle, InfoSection } from '../../../library/styleLibrary';
import Headshot from "../../../Images/HamishHeadshot.webp";

const AboutSection = () => {

   return (<InfoSection id="about" padding="200px">
    <Row>
        <Col>
            <CenteredTitle>About</CenteredTitle>
        </Col>
    </Row>
    <br />
    <Row>
        <StyledAboutCol xl="6" md="12">
            <ParagraphText>
            My name is Hamish and I have a passion for building and developing software. Originally, I studied Linguistics (Major) with a Musical Minor at the University of 
            Calgary. After a few years of Administrative Assistant work, I decided I wanted a career change.
            </ParagraphText>
            <ParagraphText>
            I attended the Object Oriented Software Development fast track program at SAIT. During that time I learned: C#, Javascript, HTML, CSS, Java, Android Studio, 
            SQL Server, OracleDB, Python, Raspberry Pi, VMWare along with security best practices.
            </ParagraphText>
            <ParagraphText>
            Professionally, I worked at an indie company called Deleptual. During those two years, I helped build multiple virtual team building experiences through the 
            Unity Engine and WebGL format. The task was to ensure that it worked within browsers. As well, I had an opportunity to design and develop a few mobile game 
            prototypes and I even released one publicly on the Google Play Store. 
            Finally, I helped build two live websites front-end and back-end using React and Firebase.
            </ParagraphText>
            <ParagraphText>
            In my recent extra curriculars, I have been learning new technologies involving the Unreal Engine/C++, Typescript and 3D modelling using Blender. 
            I am looking forward to seeing the differences between the two major Engines!
            </ParagraphText>      
        </StyledAboutCol>
        <StyledImageCol>
            <PersonalImage title="Hamish Harrison" alt="Hamish Harrison" src={Headshot} />
        </StyledImageCol>
    </Row>
</InfoSection>);
}
export default AboutSection;

const StyledAboutCol = styled(Col)`
margin: 15px;
padding: 15px;
padding-right: 50px;
background-color: ${ColorPalette.quatriary};
box-shadow: 5px 5px ${ColorPalette.grey};
`

const StyledImageCol = styled(Col)`
margin-right: 10px;
`

const PersonalImage = styled.img`
width: 100%;
margin: 15px;
background-size: contain;
border: 2px solid ${ColorPalette.tertiary};
`

const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 18px);
color: ${ColorPalette.tertiary};
`