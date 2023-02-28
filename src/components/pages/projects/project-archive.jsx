import React from 'react';
import ProjectCard from './project-card';
import { 
    HIMALAYASTrial,
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
        <ProjectCard details={HIMALAYASTrial} flipped={true}/>
        <ProjectCard details={OmegaProtocol}  />
        <ProjectCard details={ProjectArtemis} flipped={true}/>
        <ProjectCard details={GymnasticTrial} />
        <ProjectCard details={HamlicksWebsite} flipped={true}/>
    </div>);
}
export default ProjectPage;
