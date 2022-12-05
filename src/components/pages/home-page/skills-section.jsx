import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import SkillIcon from './skill-icon-square';
import cSharpIcon from '../../../Images/Icons/c-sharp-c.svg';
import unityIcon from "../../../Images/Icons/unity-3d.svg";
import javascriptIcon from "../../../Images/Icons/javascript-js.svg";
import gitHubIcon from "../../../Images/Icons/github.svg";
import firebaseIcon from "../../../Images/Icons/file-type-firebase.svg";
import reactIcon from "../../../Images/Icons/react.svg";
import visualStudioIcon from "../../../Images/Icons/visual-studio.svg";
import npmIcon from "../../../Images/Icons/node-js.svg";
import { ColourPalette, IceColourPalette } from '../../../library/colorPalette';
import { CenteredTitle, InfoSection } from '../../../library/styleLibrary';
import { ParagraphText } from '../../../library/styleLibrary';
import Resume from "../../../library/Hamish Harrison Resume.pdf";

const SkillsSection = () => {

   return (     <InfoSection padding="300px">
    <Row>
        <Col>
            <CenteredTitle>Experience</CenteredTitle>
        </Col>
    </Row>
    <br />
    <Row>
        <StyledIconCol>
            <SkillIcon imgRef={cSharpIcon} altText="C#" />
            <SkillIcon imgRef={javascriptIcon} altText="Javascript" />
            <SkillIcon imgRef={visualStudioIcon} altText="Visual Studio" />
            <SkillIcon imgRef={unityIcon} altText="Unity" />
            <SkillIcon imgRef={reactIcon} altText="React" />
            <SkillIcon imgRef={gitHubIcon} altText="Github" />
            <SkillIcon imgRef={firebaseIcon} altText="Firebase" />
            <SkillIcon imgRef={npmIcon} altText="NPM" />     
        </StyledIconCol>  
    </Row>
    <br />
    <Row>
        <Col>
            <ParagraphText centered={true}>
                I have been in professional full stack development for 2 years. The technologies I have primarily worked on include: 
            </ParagraphText>
            <ul>
                <StyledListItem>Unity WebGL/Android games utilizing: C#, Authentication services, Google Play Console, Google Admob Monetization.</StyledListItem>
                <StyledListItem>Websites utilzing React, Firebase, Firestore, Javascript, NPM, Express, Node.JS, MongoDB, JSON, HTML and CSS. </StyledListItem>
            </ul>
                
                
            <ParagraphText>
                You can view more information via my resume <a href={Resume} target="_blank">here</a>.
            </ParagraphText>
        </Col>
    </Row>
</InfoSection>);
}
export default SkillsSection;

const StyledListItem = styled.li`
font-size: clamp(10px, 4vw, 25px);
color: ${ColourPalette.tertiary};
`

const StyledIconCol = styled(Col)`
margin-left:auto;
margin-right:auto;
display:block;
text-align:center
`