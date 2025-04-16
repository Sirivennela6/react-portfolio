import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666;
`;

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      tags: ['React', 'Firebase', 'Redux'],
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills',
      tags: ['React', 'Styled Components', 'Framer Motion'],
    },
  ];

  return (
    <ProjectsSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <ProjectImage />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </ProjectTags>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 