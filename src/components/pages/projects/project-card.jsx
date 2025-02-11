import React from 'react';
import CardDetails from './card-details';
import ProjectImage from './project-image';
import { StyledCard } from '../../../library/styleLibrary';

const ProjectCard = ({details, flipped}) => {

   return (<StyledCard>
    {(flipped && window.innerWidth > 1000) ?
      <React.Fragment><ProjectImage details={details} /><CardDetails details={details}/></React.Fragment> : 
      <React.Fragment><CardDetails details={details}/><ProjectImage details={details} /></React.Fragment>
    }
      </StyledCard>
  );
}

export default ProjectCard;
