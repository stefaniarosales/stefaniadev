import React, {useState} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
//styles
import { ContainerLineTitle, Title, Line } from '../about/aboutstyled';
import { Container, ProjectsList, ProjectItem, ProjectFrame, ProjectTitle, MoreInfoButton, ModalBox } from './projectsstyled';

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleMoreInfo = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Pottermania",
      url: "https://pottermania.vercel.app/",
      git: "https://github.com/stefaniarosales/pottermania.git",
      description: "A Harry Potter themed project showcasing magical content."
    },
    {
      title: "Marvelmania",
      url: "https://marvel-mania-snowy.vercel.app/",
      git: "https://github.com/stefaniarosales/MarvelMania.git",
      description: "Explore the Marvel universe with this interactive platform."
    },
    {
      title: "Kyra",
      url: "https://integrador-diseno-web-xi.vercel.app/",
      git: "https://github.com/stefaniarosales/Integrador-DisenoWeb.git",
      description: "A creative project with stunning web design."
    },
  ];

  return (
    <>
      <Modal open={!!selectedProject} onClose={handleCloseModal}>
        <ModalBox>
          {selectedProject && (
            <>
              <h2 id="modal-title">{selectedProject.title}</h2>
              <p id="modal-description">{selectedProject.description}</p>
              <a  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', marginBottom: '10px', color: '#1976d2' }}>
                Visit Website
              </a>
              <a
                href={selectedProject.git}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#1976d2' }}
              >
                GitHub Repository
              </a>
            </>
          )}
        </ModalBox>
      </Modal>
      <Container>
        <ContainerLineTitle>
          <Title>PROJECTS</Title>
          <Line />
        </ContainerLineTitle>
        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectTitle>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  {project.title}
                </a>
              </ProjectTitle>
              <MoreInfoButton onClick={() => handleMoreInfo(project)}>
                Más información
              </MoreInfoButton>
              <ProjectFrame src={project.url} title={project.title} />
            </ProjectItem>
          ))}
        </ProjectsList>
      </Container>
    </>
  );
}

export default Projects;
