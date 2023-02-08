import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const NotFound = () => {

   return (<React.Fragment>
        <Container>
            <Row>
                <Col>
                    <h1>404!</h1>
                    <h2>The page you are looking for could not be found!</h2>
                </Col>
            </Row>
        </Container>
   </React.Fragment>);
}
export default NotFound;