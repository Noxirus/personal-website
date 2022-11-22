import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const Blog = () => {

   return (<React.Fragment>
    <Container>
        <Row>
            <Col>
                <h1>My Blog goes here</h1>
                <h2>This will cover what sort of things I have been working on</h2>
            </Col>
        </Row>
    </Container>
   </React.Fragment>);
}
export default Blog;