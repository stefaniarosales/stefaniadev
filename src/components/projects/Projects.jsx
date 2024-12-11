import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-solid-svg-icons';



//styles
import { ContainerLineTitle, Title, Line } from '../about/aboutstyled';
import { Container, ProjectsList, ProjectItem, ProjectFrame, ProjectTitle } from './projectsstyled';

function Projects() {
  const projects = [
    {
      title: "Pottermania",
      url: "https://pottermania.vercel.app/",
    },
    {
      title: "Marvelmania",
      url: "https://marvel-mania-snowy.vercel.app/",
    },
    {
      title: "Kyra",
      url: "https://integrador-diseno-web-xi.vercel.app/",
    },
  ];

  return (
    <>
      <Container>
        <ContainerLineTitle>
          <Title>PROJECTS</Title>
          <Line />
        </ContainerLineTitle>
        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectTitle>
                <a href={project.url} target="_blank"><FontAwesomeIcon icon={faGithub} />{project.title}</a>
              </ProjectTitle>
              <ProjectFrame src={project.url} title={project.title} />
            </ProjectItem>
          ))}
        </ProjectsList>
      </Container>
    </>
  );
}

export default Projects;
