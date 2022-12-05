import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';
import VideoEmbed from '../../video-embed';

const CardImage = ({details}) => {

   return ( <ImageCol xl="5" lg="6" sm="12">
   {details.img == "" ? <VideoEmbed videoUrl={details.videoUrl} /> : <ProjectImage
     alt={details.description}
     src={details.img} //TODO add image ref here
   />} 
   </ImageCol>);
}
export default CardImage;

const ProjectImage = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;

  &:hover{
    cursor: pointer;
  }
`

const ImageCol = styled(Col)`

`