import React from 'react';
import ProjectCard from './project-card';
import { 
    OmegaProtocol, 
    FinalVerdict, 
    ProjectArtemis,
    HamlicksWebsite,
    GymnasticTrial,
    AbandonShip
} from '../../../library/projectLibrary';

const ProjectPage = () => {
   return (
    <div>
        <ProjectCard details={AbandonShip}/>
        <ProjectCard details={FinalVerdict}  flipped={true} />
        <ProjectCard details={ProjectArtemis} />
        <ProjectCard details={OmegaProtocol}  flipped={true}/>
        <ProjectCard details={HamlicksWebsite} />
        <ProjectCard details={GymnasticTrial} flipped={true}/>
    </div>);
}
export default ProjectPage;
