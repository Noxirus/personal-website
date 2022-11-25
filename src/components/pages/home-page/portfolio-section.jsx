import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
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

import { CenteredTitle } from '../../../library/styleLibrary';

const PortfolioSection = () => {

   return (<InfoSection>
    <Row>
        <Col>
            <CenteredTitle>My portfolio of professional projects</CenteredTitle>
        </Col>
    </Row>
    <hr />
    <Row>
            <Col>
                <ProjectCard details={PipePuzzles} />
            </Col>
            <Col>
                <ProjectCard details={TheWilfredEscape} />
            </Col>
            <Col>
                <ProjectCard details={AbandonShip} />
            </Col>
            <Col>
                <ProjectCard details={FinalVerdict} />
            </Col>    
            <Col>
                <ProjectCard details={TeamUnbreakable} />
            </Col>
            <Col>
                <ProjectCard details={HIMALAYASTrial} />
            </Col>
            <Col>
                <ProjectCard details={OmegaProtocol} />
            </Col>
            <Col>
                <ProjectCard details={ProjectArtemis} />
            </Col>    
    </Row>
</InfoSection>);
}
export default PortfolioSection;

const InfoSection = styled(Container)`
    border-width: 5px;
    border-style: solid;
    test-code: ${props => props.test};

    padding-top: 250px;
`