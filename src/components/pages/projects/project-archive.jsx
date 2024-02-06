import React from 'react';
import ProjectCard from './project-card';
import { 
    HIMALAYASTrial,
    MidnightManor, 
    OmegaProtocol, 
    FinalVerdict, 
    ProjectArtemis,
    HamlicksWebsite,
    GymnasticTrial,
    BabysFirstNightmare
} from '../../../library/projectLibrary';

const ProjectPage = () => {
   return (
    <div>
        <ProjectCard details={BabysFirstNightmare} flipped={true}/>
        <ProjectCard details={MidnightManor} />
        <ProjectCard details={HIMALAYASTrial} flipped={true}/>
        <ProjectCard details={FinalVerdict} />
        <ProjectCard details={ProjectArtemis} flipped={true}/>
        <ProjectCard details={OmegaProtocol}  />
        <ProjectCard details={HamlicksWebsite} flipped={true}/>
        <ProjectCard details={GymnasticTrial} />
    </div>);
}
export default ProjectPage;
