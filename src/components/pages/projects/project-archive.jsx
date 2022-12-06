import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { 
    TeamUnbreakable, 
    HIMALAYASTrial, 
    PipePuzzles, 
    TheWilfredEscape, 
    AbandonShip, 
    OmegaProtocol, 
    FinalVerdict, 
    ProjectArtemis,
    HamlicksWebsite,
    GymnasticTrial
} from '../../../library/projectLibrary';
import { CenteredTitle } from '../../../library/styleLibrary';
import ProjectCard from './project-card';

const ProjectPage = () => {

   return (
    <StyledPage>
        <Row>
            <Col>
                <CenteredTitle>Project Archive</CenteredTitle>
            </Col>
        </Row>
        <ProjectCard details={PipePuzzles} />
        <ProjectCard details={TheWilfredEscape} flipped={true} screenSize={window.innerWidth} />
        <ProjectCard details={AbandonShip} />
        <ProjectCard details={FinalVerdict} flipped={true} />
        <ProjectCard details={TeamUnbreakable} />
        <ProjectCard details={HIMALAYASTrial} flipped={true} />
        <ProjectCard details={OmegaProtocol} />
        <ProjectCard details={ProjectArtemis} flipped={true} />
        <ProjectCard details={GymnasticTrial} />
        <ProjectCard details={HamlicksWebsite} flipped={true} />
   </StyledPage>);
}
export default ProjectPage;

const StyledPage = styled(Container)`
padding-top: 150px;
`