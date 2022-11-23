import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const PortfolioSection = () => {

   return (<InfoSection>
    <Row>
        <Col>
            <h2>My portfolio of projects</h2>
            <h2>OR all? And I just get rid of the additional route pages?</h2>
            <p>Insert project cards here (Just a few?), animate them?</p>
            <p>Maybe lets try adding all relevant information here? and they can click to see more information if they want</p>
        </Col>
    </Row>
</InfoSection>);
}
export default PortfolioSection;

const InfoSection = styled(Container)`
    border-width: 5px;
    border-style: solid;
    test-code: ${props => props.test};
`