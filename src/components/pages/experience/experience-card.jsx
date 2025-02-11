import React from 'react';
import { CardImage, ImageWrapper, PopOutIcon, StyledCard, StyledListItem, ZIndexCol } from '../../../library/styleLibrary';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ColorPalette } from '../../../library/colorPalette';

const ExperienceCard = ({details}) => {

   return (<StyledCard>
    <ZIndexCol>
        <ExperienceTitle>
            {details.name} {details.link && <PopIcon icon={faUpRightFromSquare} onClick={() => window.open(details.link)}  />}
        </ExperienceTitle>
        <ul>
            {details.bulletPoints.map((information, key) => (
                <StyledListItem key={key}>{information}</StyledListItem>
            ))}
        </ul>
    </ZIndexCol>
    {details.img && <ZIndexCol xl="5" lg="6" sm="12">
        <ImageWrapper>
            <CardImage 
                alt = {details.alt}
                title = {details.name}
                src = {details.img}
                onClick={() => window.open(details.link)}
            />
        </ImageWrapper>
    </ZIndexCol>} 
   </StyledCard>);
}
export default ExperienceCard;

const PopIcon = styled(PopOutIcon)`
color: ${ColorPalette.tertiary}
`

const ExperienceTitle = styled.h3`
font-size: clamp(20px, 6vw, 35px);
color: ${ColorPalette.secondary};
animation: ${props => props.animation ? props.animation : ""};
${props => props.initialState ? props.initialState : ""};
`
