import React from 'react';
import IntroductionSection from './page-sections/introduction-section';
import ProjectSection from './page-sections/project-section';

const ExperienceSection = React.lazy(() => import('./page-sections/experience-section'));
const AboutSection = React.lazy(() =>import('./page-sections/about-section'));
const ContactMe = React.lazy(() => import ('./page-sections/contact-me'));

const HomePage = () => {

   return (
   <div>
      <IntroductionSection />
      <ProjectSection />
      <ExperienceSection />
      <AboutSection />
      <ContactMe />
   </div>);
}
export default HomePage;
