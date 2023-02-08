import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { ColourPalette } from '../../library/colorPalette';
import { InfoSection} from '../../library/styleLibrary';
import { SocialMediaIcon } from '../../library/styleLibrary';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

   return (<InfoSection padding="200px">
    <Row>
        <Col>
            <FooterText>
                Designed and Developed by Hamish Harrison
                <SocialMediaIcon color={ColourPalette.tertiary} icon={faCodeBranch} size="2x" onClick={() => window.open("https://github.com/Noxirus/personal-website")} />
            </FooterText>
            
        </Col>
    </Row>
   </InfoSection>);
}
export default Footer;

export const FooterText = styled.p`
font-size: clamp(15px, 4vw, 15px);
color: ${ColourPalette.tertiary};
`