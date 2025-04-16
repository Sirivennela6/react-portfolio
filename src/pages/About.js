import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsSection = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ExperienceSection = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionHeader = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExperienceItem = styled.li`
  margin-bottom: 2rem;
`;

const ExperienceTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ExperienceDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const ExperienceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </SectionTitle>
      <ContentContainer>
        <SkillsSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionHeader>Skills</SectionHeader>
          <SkillList>
            <SkillItem>
              <SkillName>React</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillName>JavaScript</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillName>HTML/CSS</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillName>Node.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillName>Git</SkillName>
            </SkillItem>
          </SkillList>
        </SkillsSection>
        <ExperienceSection
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SectionHeader>Experience</SectionHeader>
          <ExperienceList>
            <ExperienceItem>
              <ExperienceTitle>Web Developer</ExperienceTitle>
              <ExperienceDate>2020 - Present</ExperienceDate>
              <ExperienceDescription>
                Developing modern web applications using React and other modern technologies.
              </ExperienceDescription>
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceTitle>Frontend Developer</ExperienceTitle>
              <ExperienceDate>2018 - 2020</ExperienceDate>
              <ExperienceDescription>
                Creating responsive and user-friendly interfaces for various clients.
              </ExperienceDescription>
            </ExperienceItem>
          </ExperienceList>
        </ExperienceSection>
      </ContentContainer>
    </AboutSection>
  );
};

export default About; 