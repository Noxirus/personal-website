import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import styled from 'styled-components';
import { CenteredTitle, InfoSection, ParagraphText, SecondaryText, StyledButton } from '../../library/styleLibrary';

const ContactMe = () => {

   return (<InfoSection padding="200px">
        <Row>
            <Col>
                <CenteredTitle>Contact me</CenteredTitle>
                <ParagraphText>I am currently looking for work! Should you have any opportunities for me please dont hesitate to send me an email about any opportunities.</ParagraphText>
                <StyledButton onClick={(e) => {window.location.href = "mailto:hamishharrison@hotmail.com";
                e.preventDefault();}}>Email Me</StyledButton>
            </Col>
        </Row>
   </InfoSection>);
}
export default ContactMe;