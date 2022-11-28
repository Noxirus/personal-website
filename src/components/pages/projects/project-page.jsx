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
    ProjectArtemis 
} from '../../../library/portfolioLibrary';
import ProjectCard from './project-card';

const ProjectPage = () => {

   return (<StyledPage>
    <Row>
        <Col>
            <h1>Hamish Harrison's Project Archive</h1>
        </Col>
    </Row>
    <ProjectCard details={PipePuzzles} />
    <ProjectCard details={TheWilfredEscape} />
    <ProjectCard details={AbandonShip} />
    <ProjectCard details={FinalVerdict} />
    <ProjectCard details={TeamUnbreakable} />
    <ProjectCard details={HIMALAYASTrial} />
    <ProjectCard details={OmegaProtocol} />
    <ProjectCard details={ProjectArtemis} />
    
   </StyledPage>);
}
export default ProjectPage;

const StyledPage = styled(Container)`
padding-top: 150px;
`