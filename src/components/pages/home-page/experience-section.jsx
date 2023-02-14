import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import SkillIcon from './skill-icon';
import cSharpIcon from '../../../Images/Icons/c-sharp-c.svg';
import unityIcon from "../../../Images/Icons/unity-3d.svg";
import javascriptIcon from "../../../Images/Icons/javascript-js.svg";
import gitHubIcon from "../../../Images/Icons/github.svg";
import firebaseIcon from "../../../Images/Icons/file-type-firebase.svg";
import reactIcon from "../../../Images/Icons/react.svg";
import visualStudioIcon from "../../../Images/Icons/visual-studio.svg";
import npmIcon from "../../../Images/Icons/node-js.svg";
import { ColorPalette } from '../../../library/colorPalette';
import { CenteredTitle, InfoSection } from '../../../library/styleLibrary';
import { ParagraphText } from '../../../library/styleLibrary';
import Resume from "../../../library/Hamish Harrison Resume.pdf";

const ExperienceSection = () => {
   return (<InfoSection id="experience" padding="200px">
    <Row>
        <Col>
            <CenteredTitle>Experience</CenteredTitle>
        </Col>
    </Row>
    <br />
    <Row>
        <StyledIconCol>
            <SkillIcon delay=".05s" imgRef={cSharpIcon} altText="C#" />
            <SkillIcon delay=".1s" imgRef={javascriptIcon} altText="Javascript" />
            <SkillIcon delay=".15s" imgRef={visualStudioIcon} altText="Visual Studio" />
            <SkillIcon delay=".2s" imgRef={unityIcon} altText="Unity" />
            <SkillIcon delay=".25s" imgRef={reactIcon} altText="React" />
            <SkillIcon delay=".3s" imgRef={gitHubIcon} altText="Github" />
            <SkillIcon delay=".35s" imgRef={firebaseIcon} altText="Firebase" />
            <SkillIcon delay=".4s" imgRef={npmIcon} altText="NPM" />
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
export default ExperienceSection;

const StyledListItem = styled.li`
font-size: clamp(10px, 4vw, 25px);
color: ${ColorPalette.tertiary};
`

const StyledIconCol = styled(Col)`
margin-left:auto;
margin-right:auto;
display:block;
text-align:center
`