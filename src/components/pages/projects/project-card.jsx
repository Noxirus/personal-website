import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const ProjectCard = ({details}) => {

   return (<React.Fragment>
    <Container>
        <Row>
            <Col>
                <h1>Project card here</h1>
                <h2>Video of project? Picture?</h2>
                <h3>Short Description of project here?</h3>
                <h4>Link to more elaborate description section for the project?</h4>
            </Col>
        </Row>
    </Container>
   </React.Fragment>);
}
//TODO I need to have some unique ID so when I click on a project it opens the generic project description area, but will pull the correct details
export default ProjectCard;