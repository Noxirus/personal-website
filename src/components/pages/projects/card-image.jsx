import React, { useState } from 'react';
import styled from 'styled-components';
import { ZIndexCol } from '../../../library/styleLibrary';

const VideoEmbed = React.lazy(() => import('../../general/video-embed'));

const CardImage = ({details}) => {
  const[viewingTrailer, setViewingTrailer] = useState(false);

  function OnHover()
  {
    if(details.videoUrl !== undefined)
    {
      setViewingTrailer(true);
    }
  }

   return ( <ZIndexCol onMouseEnter={() => OnHover()} xl="5" lg="6" sm="12">
   {viewingTrailer ? <VideoEmbed videoUrl={details.videoUrl} /> : <ProjectImage
     alt={details.description}
     title={details.title}
     src={details.img}
   />} 
   </ZIndexCol>);
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
