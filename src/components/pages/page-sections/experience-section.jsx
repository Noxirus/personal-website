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
import cPlusPlusIcon from "../../../Images/Icons/CPlusPlusIcon.svg"
import npmIcon from "../../../Images/Icons/node-js.svg";
import { ColorPalette } from '../../../library/colorPalette';
import { CenteredTitle, AutoMarginContainer } from '../../../library/styleLibrary';
import ExperienceCard from '../experience/experience-card';
import { BowValleyCollege, CGDA, NiceAxeGames, OtherExperience } from '../../../library/experienceLibrary';

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
    <ExperienceCard details={BowValleyCollege} />
    <ExperienceCard details={CGDA} />
    <ExperienceCard details={NiceAxeGames} />
    <ExperienceCard details={OtherExperience} />
</AutoMarginContainer>);
}
export default ExperienceSection;

const ResumeTag = styled.a`
color: ${ColorPalette.tertiary};

&:hover{
    color: ${ColorPalette.primary};
  }
`

const StyledIconCol = styled(Col)`
margin-left:auto;
margin-right:auto;
display:block;
text-align:center;
z-index: 2;
`
