import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'reactstrap';
import ProjectCard from './project-card';

const Projects = () => {

   return (<React.Fragment>
        <Container>
            <Row>
                <Col>
                    <h1>Projects I have worked on!</h1>
                    <h2>Insert project list and potential descriptions here?</h2>
                    <h3>Clicking on the projects should show a new card with more detail?</h3>
                    <ProjectCard details="Test" /> {/* TODO this should be in a library somewhere where I can pull this, is a DB necessary here? Might just be ok to store it all here */}
                </Col>
            </Row>
        </Container>

   </React.Fragment>);
}
export default Projects;