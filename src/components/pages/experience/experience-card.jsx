import React from 'react';
import { CardImage, ImageWrapper, PopOutIcon, SecondaryText, StyledCard, StyledListItem, ZIndexCol } from '../../../library/styleLibrary';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ExperienceCard = ({details}) => {

   return (<StyledCard>
    <ZIndexCol>
        <SecondaryText>
            {details.name} {details.link && <PopOutIcon icon={faUpRightFromSquare} onClick={() => window.open(details.link)}  />}
        </SecondaryText>
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
