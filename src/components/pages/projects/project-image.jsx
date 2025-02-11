import React, { useState } from 'react';

import { CardImage, ImageWrapper, ZIndexCol } from '../../../library/styleLibrary';

const VideoEmbed = React.lazy(() => import('../../general/video-embed'));

const ProjectImage = ({details}) => {
  const[viewingTrailer, setViewingTrailer] = useState(false);

  function OnHover()
  {
    if(details.videoUrl !== undefined)
    {
      setViewingTrailer(true);
    }
  }

   return ( <ZIndexCol onMouseEnter={() => OnHover()} xl="5" lg="6" sm="12">
   {viewingTrailer ? <VideoEmbed videoUrl={details.videoUrl} /> : <ImageWrapper><CardImage
     alt={details.description}
     title={details.title}
     src={details.img}
     onClick={() => window.open(details.link)}
   /></ImageWrapper>} 
   </ZIndexCol>);
}
export default ProjectImage;
