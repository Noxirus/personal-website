import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const AboutMe = () => {

   return (<React.Fragment>
        <Container>
            <Row>
                <Col>
                    <h1>About me!</h1>
                    <h2>Talk about my tech stack and technologies I have worked with here</h2>
                    <h3>Do I have this here? Or should I put it on the home page from when people scroll down?</h3>
                </Col>
            </Row>
        </Container>

   </React.Fragment>);
}
export default AboutMe;