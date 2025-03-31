import React from 'react';
import projectsData from '../data/projects.js';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { 
  Container,
  ProjectsContainer, 
  ProjectCard, 
  ProjectImage, 
  Overlay, 
  Technologies, 
  TechIcon, 
  ButtonContainer, 
  Button 
} from './projectsstyled.js';

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import LetterComponent from '../UI/LetterComponent';

const Projects = () => {
  return (
    <>
    <Container> 
      <ContainerLineTitle>
                <LetterComponent >P</LetterComponent>
                <Title>
                    {"PROJECTS".split("").map((letter, index) => (
                        <span key={index} style={{ "--index": index }}>{letter}</span>
                    ))}
                </Title>
                <Line />
            </ContainerLineTitle>
      <ProjectsContainer>
      {projectsData.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectImage src={project.image} alt={project.title} />
          <Overlay>
            <h3>{project.title}</h3>
            <Technologies>
              {project.technologies.map((tech, i) => (
                <TechIcon key={i} src={`/technologies/${tech.toLowerCase()}.svg`} alt={tech} />
              ))}
            </Technologies>
            <ButtonContainer>
              <Button href={project.url} target="_blank" rel="noopener noreferrer">
                <WebIcon /> Web
              </Button>
              <Button href={project.git} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> Código
              </Button>
            </ButtonContainer>
          </Overlay>
        </ProjectCard>
      ))}
      </ProjectsContainer>
    </Container>
    </>
  );
};

export default Projects;
