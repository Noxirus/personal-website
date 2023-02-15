import React from 'react';
import { Row, Col } from 'reactstrap';
import { CenteredCol, CenteredTitle, AutoMarginContainer, StyledButton } from '../../../library/styleLibrary';
import ProjectCard from '../projects/project-card';
import { 
    PipePuzzles, 
    AbandonShip,
    HIMALAYASTrial, 
} from '../../../library/projectLibrary';


const OpenProjectArchive = () => {
    window.open("/#/projects", "_self")
    window.scrollTo(0, 0);
}

const ProjectSection = () => {
   return (
   <AutoMarginContainer id="projects" padding="250px">
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
    </AutoMarginContainer>);
}
export default ProjectSection;
