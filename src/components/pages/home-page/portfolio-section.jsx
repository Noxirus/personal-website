import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import ProjectCard from '../projects/project-card';
import { 
    TeamUnbreakable, 
    PipePuzzles, 
    AbandonShip, 
} from '../../../library/portfolioLibrary';

import { CenteredTitle, InfoSection } from '../../../library/styleLibrary';

const PortfolioSection = () => {

   return (<InfoSection padding="250px">
    <Row>
        <Col>
            <CenteredTitle>Projects I have worked on</CenteredTitle>
        </Col>
    </Row>
    <br />
    
    <ProjectCard details={PipePuzzles} />
    <ProjectCard details={AbandonShip} />
    <ProjectCard details={TeamUnbreakable} />
    <Button onClick={() => window.open("/projects", "_self")}>See more projects</Button>
</InfoSection>);
}
export default PortfolioSection;