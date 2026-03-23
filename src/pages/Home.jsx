import React from 'react';
import Hero from '../sections/Hero';
import AboutMePreview from '../sections/AboutMePreview';
import SkillsSnapshot from '../sections/SkillsSnapshot';
import ProjectsPreview from '../sections/ProjectsPreview';
import TrainingInternshipsPreview from '../sections/TrainingInternshipsPreview';
import CertificationsPreview from '../sections/CertificationsPreview';
import AchievementsPreview from '../sections/AchievementsPreview';
import EducationPreview from '../sections/EducationPreview';
import ContactPreview from '../sections/ContactPreview';

const Home = () => {
  return (
    <div className="page-container">
      <Hero />
      <div id="about-section">
        <AboutMePreview />
      </div>
      <SkillsSnapshot />
      <ProjectsPreview />
      <TrainingInternshipsPreview />
      <CertificationsPreview />
      <AchievementsPreview />
      <EducationPreview />
      <ContactPreview />
    </div>
  );
};

export default Home;
