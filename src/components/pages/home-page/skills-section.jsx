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
import { IceColourPalette } from '../../../library/colorPalette';
import { CenteredTitle } from '../../../library/styleLibrary';

const SkillsSection = () => {

   return (     <InfoSection>
    <Row>
        <Col>
            <CenteredTitle>Professional Technologies</CenteredTitle>
        </Col>
    </Row>
    <hr />
    <Row>
            <SkillIcon imgRef={cSharpIcon} altText="C#" />
            <SkillIcon imgRef={javascriptIcon} altText="C#" />
            <SkillIcon imgRef={visualStudioIcon} altText="C#" />
            <SkillIcon imgRef={unityIcon} altText="C#" />
            <SkillIcon imgRef={reactIcon} altText="C#" />
            <SkillIcon imgRef={gitHubIcon} altText="C#" />
            <SkillIcon imgRef={firebaseIcon} altText="C#" />
            <SkillIcon imgRef={npmIcon} altText="C#" />       
    </Row>
</InfoSection>);
}
export default SkillsSection;
//TODO export this or make this different? Depends on the page layout
const InfoSection = styled(Container)`
margin-left: auto;
margin-right: auto;

padding-top: 300px;

`