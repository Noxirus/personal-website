import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { ColorPalette } from '../../../library/colorPalette';
import { CenteredTitle, AutoMarginContainer } from '../../../library/styleLibrary';
import Headshot from "../../../Images/HamishHeadshot.webp";

const AboutSection = () => {
   return (<AutoMarginContainer id="about" padding="200px">
    <Row>
        <Col>
            <CenteredTitle>About</CenteredTitle>
        </Col>
    </Row>
    <br />
    <PaddingRow>
        <StyledAboutCol xl="6" md="12">
            <ParagraphText>
            My name is Hamish and I have a passion for building and developing software. Originally, I studied Linguistics with a Musical Minor at the University of 
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
            Recently I have been teaching Game Development at Bow Valley College and working on personal game projects specifically focused on the Unreal Engine.
            </ParagraphText>      
        </StyledAboutCol>
        <Col>
            <PersonalImage title="Hamish Harrison" alt="Hamish Harrison" src={Headshot} />
        </Col>
    </PaddingRow>
</AutoMarginContainer>);
}

export default AboutSection;

const StyledAboutCol = styled(Col)`
margin-bottom: 15px;
padding: 15px;
background-color: ${ColorPalette.quatriary};
box-shadow: 5px 5px ${ColorPalette.grey};
`

const PaddingRow = styled(Row)`
padding: 20px;
`

const PersonalImage = styled.img`
width: 100%;
margin: auto;
background-size: contain;
border: 2px solid ${ColorPalette.tertiary};
`

const ParagraphText = styled.p`
font-size: clamp(10px, 4vw, 18px);
color: ${ColorPalette.secondary};
`
