import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import SkillIcon from '../../general/skill-icon';
import cSharpIcon from '../../../Images/Icons/c-sharp-c.svg';
import unityIcon from "../../../Images/Icons/unity-3d.svg";
import javascriptIcon from "../../../Images/Icons/javascript-js.svg";
import gitHubIcon from "../../../Images/Icons/github.svg";
import firebaseIcon from "../../../Images/Icons/file-type-firebase.svg";
import reactIcon from "../../../Images/Icons/react.svg";
import visualStudioIcon from "../../../Images/Icons/visual-studio.svg";
import unrealEngineIcon from "../../../Images/Icons/unreal-engine.svg";
import cPlusPlusIcon from "../../../Images/Icons/CPlusPlusIcon.png"
import npmIcon from "../../../Images/Icons/node-js.svg";
import { ColorPalette } from '../../../library/colorPalette';
import { BackgroundRow, CenteredTitle, AutoMarginContainer, ZIndexCol } from '../../../library/styleLibrary';
import { ParagraphText } from '../../../library/styleLibrary';
import Resume from "../../../library/Hamish Harrison Resume.pdf";

const ExperienceSection = () => {
   return (<AutoMarginContainer id="experience" padding="200px">
    <Row>
        <Col>
            <CenteredTitle>Experience</CenteredTitle>
        </Col>
    </Row>
    <br />
    <Row>
        <StyledIconCol>
            <SkillIcon delay=".00s" imgRef={unrealEngineIcon} altText="Unreal" />
            <SkillIcon delay=".05s" imgRef={cPlusPlusIcon} altText="C++" />
            <SkillIcon delay=".1s" imgRef={unityIcon} altText="Unity" />
            <SkillIcon delay=".15s" imgRef={cSharpIcon} altText="C#" />
            <SkillIcon delay=".2s" imgRef={javascriptIcon} altText="Javascript" />
            <SkillIcon delay=".25s" imgRef={visualStudioIcon} altText="Visual Studio" />
            <SkillIcon delay=".3s" imgRef={reactIcon} altText="React" />
            <SkillIcon delay=".35s" imgRef={gitHubIcon} altText="Github" />
            <SkillIcon delay=".4s" imgRef={firebaseIcon} altText="Firebase" />
            <SkillIcon delay=".45s" imgRef={npmIcon} altText="NPM" />
        </StyledIconCol>  
    </Row>
    <br />
    <BackgroundRow>
        <ZIndexCol>
            <ParagraphText centered={true}>
                I have been in professional game development for 3 years. The technologies I have primarily worked on include: 
            </ParagraphText>
            <ul>
                <StyledListItem>Unreal Engine games using C++ and Perforce.</StyledListItem>
                <StyledListItem>Unity WebGL/Android games utilizing: C#/.NET, Google Firebase Cloud, Google Play Console, Google Admob Monetization.</StyledListItem>
                <StyledListItem>Websites utilzing React, Javascript, Google Firebase Cloud, NPM, Express, Node.JS, MongoDB, JSON, HTML and CSS. </StyledListItem>
                <StyledListItem>Current technologies I have been working with are: Unreal Engine/C++, Microsoft Azure, Java Springboot</StyledListItem>
            </ul>
            <ParagraphText>
                You can view more information via my <ResumeTag href={Resume} rel="noreferrer" target="_blank">resume here</ResumeTag>.
            </ParagraphText>
        </ZIndexCol>
    </BackgroundRow>
</AutoMarginContainer>);
}
export default ExperienceSection;

const ResumeTag = styled.a`
color: ${ColorPalette.tertiary};

&:hover{
    color: ${ColorPalette.primary};
  }
`

const StyledListItem = styled.li`
font-size: clamp(10px, 4vw, 25px);
color: ${ColorPalette.tertiary};
`

const StyledIconCol = styled(Col)`
margin-left:auto;
margin-right:auto;
display:block;
text-align:center;
z-index: 2;
`
