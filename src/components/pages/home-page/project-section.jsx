import React from 'react';
import { Row, Col } from 'reactstrap';
import ProjectCard from '../projects/project-card';
import { 
    PipePuzzles, 
    AbandonShip,
    HIMALAYASTrial, 
} from '../../../library/projectLibrary';

import { CenteredCol, CenteredTitle, InfoSection, StyledButton } from '../../../library/styleLibrary';

const OpenProjectArchive = () => {
    window.open("/#/projects", "_self")
    window.scrollTo(0, 0);
}

const ProjectSection = () => {

   return (
   <InfoSection id="projects" padding="250px">
        <Row>
            <Col>
                <CenteredTitle>Project Library</CenteredTitle>
            </Col>
        </Row>
        <br />
        <ProjectCard details={PipePuzzles} />
        <ProjectCard details={AbandonShip} flipped={true} />
        <ProjectCard details={HIMALAYASTrial} />
        <Row>
            <CenteredCol>
                <StyledButton onClick={() => OpenProjectArchive()}>See more projects</StyledButton>
            </CenteredCol>
        </Row>
    </InfoSection>);
}
export default ProjectSection;