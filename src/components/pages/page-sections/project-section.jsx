import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { CenteredCol, CenteredTitle, AutoMarginContainer, StyledButton } from '../../../library/styleLibrary';
import ProjectCard from '../projects/project-card';
import { 
    PipePuzzles, 
    AbandonShip,
    TeamUnbreakable,
    SumoSurprise,
    BabysFirstNightmare
} from '../../../library/projectLibrary';
import ProjectPage from '../projects/project-archive';

const ProjectSection = () => {
    const [viewingAllProjects, setViewingAllProjects] = useState(false);

   return (
    <AutoMarginContainer id="projects" padding="250px">
        <Col>
            <CenteredTitle>Project Library</CenteredTitle>
        </Col>
        <br />
        <ProjectCard details={SumoSurprise} flipped={true} />
        <ProjectCard details={PipePuzzles} />
        <ProjectCard details={AbandonShip} flipped={true} />
        <ProjectCard details={BabysFirstNightmare}/>
        {viewingAllProjects && <ProjectPage />}
        <Row>
            <CenteredCol>
                <br />
                <StyledButton onClick={() => setViewingAllProjects(!viewingAllProjects)}>
                    {viewingAllProjects ? "Collapse Projects" : "See All Projects"}
                </StyledButton>
            </CenteredCol>
        </Row>
    </AutoMarginContainer>);
}
export default ProjectSection;
