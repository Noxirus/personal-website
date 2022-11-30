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
} from '../../../library/projectLibrary';
import ProjectCard from './project-card';

const ProjectPage = () => {

   return (<StyledPage>
    <Row>
        <Col>
            <h1>Hamish Harrison's Project Archive</h1>
        </Col>
    </Row>
    <ProjectCard details={PipePuzzles} />
    <ProjectCard details={TheWilfredEscape} flipped={true} />
    <ProjectCard details={AbandonShip} />
    <ProjectCard details={FinalVerdict} flipped={true} />
    <ProjectCard details={TeamUnbreakable} />
    <ProjectCard details={HIMALAYASTrial} flipped={true} />
    <ProjectCard details={OmegaProtocol} />
    <ProjectCard details={ProjectArtemis} flipped={true} />
    
   </StyledPage>);
}
export default ProjectPage;

const StyledPage = styled(Container)`
padding-top: 150px;
`