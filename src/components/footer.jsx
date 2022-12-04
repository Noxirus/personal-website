import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { ColourPalette } from '../library/colorPalette';
import { CenteredTitle, InfoSection, ParagraphText } from '../library/styleLibrary';

const Footer = () => {

   return (<InfoSection padding="200px">
    <Row>
        <Col>
            <FooterText>Designed and Developed by Hamish Harrison</FooterText>
        </Col>
    </Row>
   </InfoSection>);
}
export default Footer;

export const FooterText = styled.p`
font-size: clamp(15px, 4vw, 15px);
color: ${ColourPalette.tertiary};
`