import React from 'react';
import ProjectCard from './project-card';
import { 
    TheWilfredEscape, 
    OmegaProtocol, 
    FinalVerdict, 
    ProjectArtemis,
    HamlicksWebsite,
    GymnasticTrial
} from '../../../library/projectLibrary';

const ProjectPage = () => {
   return (
    <div>
        <ProjectCard details={TheWilfredEscape} flipped={true} screenSize={window.innerWidth} />
        <ProjectCard details={FinalVerdict} />
        <ProjectCard details={OmegaProtocol}  flipped={true}/>
        <ProjectCard details={ProjectArtemis} />
        <ProjectCard details={GymnasticTrial} flipped={true} />
        <ProjectCard details={HamlicksWebsite} />
    </div>);
}
export default ProjectPage;
