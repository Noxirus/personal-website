import React from 'react';
import ProjectCard from './project-card';
import { 
    HIMALAYASTrial,
    TheWilfredEscape, 
    OmegaProtocol, 
    FinalVerdict, 
    ProjectArtemis,
    HamlicksWebsite,
    GymnasticTrial,
    TeamUnbreakable
} from '../../../library/projectLibrary';

const ProjectPage = () => {
   return (
    <div>
        <ProjectCard details={TeamUnbreakable} flipped={true}/>
        <ProjectCard details={FinalVerdict} />
        <ProjectCard details={HIMALAYASTrial} flipped={true}/>
        <ProjectCard details={TheWilfredEscape} />
        <ProjectCard details={ProjectArtemis} flipped={true}/>
        <ProjectCard details={OmegaProtocol}  />
        <ProjectCard details={HamlicksWebsite} flipped={true}/>
        <ProjectCard details={GymnasticTrial} />
    </div>);
}
export default ProjectPage;
