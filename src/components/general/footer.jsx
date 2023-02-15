import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { ColorPalette } from '../../library/colorPalette';
import { InfoSection, ZIndexCol} from '../../library/styleLibrary';
import { SocialMediaIcon } from '../../library/styleLibrary';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

   return (<InfoSection padding="200px">
    <Row>
        <ZIndexCol>
            <FooterText>
                Designed and Developed by Hamish Harrison
                <SocialMediaIcon color={ColorPalette.tertiary} icon={faCodeBranch} size="2x" onClick={() => window.open("https://github.com/Noxirus/personal-website")} />
            </FooterText>
            
        </ZIndexCol>
    </Row>
   </InfoSection>);
}
export default Footer;

export const FooterText = styled.p`
font-size: clamp(15px, 4vw, 15px);
color: ${ColorPalette.tertiary};
`