import React from 'react';
import { Row, Col } from 'reactstrap';
import ProjectCard from '../projects/project-card';
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

import { CenteredTitle, InfoSection } from '../../../library/styleLibrary';

const PortfolioSection = () => {

   return (<InfoSection padding="250px">
    <Row>
        <Col>
            <CenteredTitle>My portfolio of professional projects</CenteredTitle>
        </Col>
    </Row>
    <br />
    <Row>
        <ProjectCard details={PipePuzzles} />
        <ProjectCard details={TheWilfredEscape} />
        <ProjectCard details={AbandonShip} />
        <ProjectCard details={FinalVerdict} />
        <ProjectCard details={TeamUnbreakable} />
        <ProjectCard details={HIMALAYASTrial} />
        <ProjectCard details={OmegaProtocol} />
        <ProjectCard details={ProjectArtemis} />
    </Row>
</InfoSection>);
}
export default PortfolioSection;