import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import ProjectCard from '../projects/project-card';
import { 
    PipePuzzles, 
    AbandonShip,
    HIMALAYASTrial, 
} from '../../../library/projectLibrary';

import { CenteredTitle, InfoSection, StyledButton } from '../../../library/styleLibrary';

const OpenProjectArchive = () => {
    window.open("/#/projects", "_self")
    window.scrollTo(0, 0);
}

const ProjectSection = () => {

   return (<InfoSection id="projects" padding="250px">
    <Row>
        <Col>
            <CenteredTitle>Projects I have worked on</CenteredTitle>
        </Col>
    </Row>
    <br />
    
    <ProjectCard details={PipePuzzles} />
    <ProjectCard details={AbandonShip} flipped={true} />
    <ProjectCard details={HIMALAYASTrial} />
    <StyledButton onClick={() => OpenProjectArchive()}>See more projects</StyledButton>
</InfoSection>);
}
export default ProjectSection;