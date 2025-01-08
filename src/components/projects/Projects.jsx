import React, {useState} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { projects } from '../data/projects';
//styles
import { ContainerLineTitle, Title, Line } from '../about/aboutstyled';
import { 
  Container,
  SubContainer,
  ProjectsList,
  ProjectItem,
  ProjectFrame,
  ProjectTitle,
  MoreInfoButton,
  TechnologiesList,
  TechnologyIcon
  } from './projectsstyled';

import LetterComponent from '../UI/LetterComponent';

//style modal
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleMoreInfo = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
      >
        <Box sx={modalStyle}>
          {selectedProject && (
            <>
              <h2 id="modal-title" style={{color: '#b7b7b7'}}>{selectedProject.title}</h2>
              <p id="modal-description" style={{color: '#b7b7b7'}}>
                {selectedProject.description}
              </p>

              <h3  style={{color: '#b7b7b7'}}>Tecnologías Utilizadas</h3>
              <TechnologiesList>
                {selectedProject.technologies.map((technology) => (
                  <li key={technology}>
                    {technology === 'HTML' && (
                      <TechnologyIcon src="./technologies/html.svg" alt="HTML" />
                    )}
                    {technology === 'CSS' && (
                      <TechnologyIcon src="./technologies/css.svg" alt="CSS" />
                    )}
                    {technology === 'Git' && (
                      <TechnologyIcon src="./technologies/git.svg" alt="Git" />
                    )}
                    {technology === 'Javascript' && (
                      <TechnologyIcon src="./technologies/javascript.svg" alt="javascript" />
                    )}
                    {technology === 'React' && (
                      <TechnologyIcon src="./technologies/react.svg" alt="react" />
                    )}
                    {technology === 'styled-components' && (
                      <TechnologyIcon src="./technologies/styled-components.svg" alt="styled-components" />
                    )}
                  </li>
                ))}
              </TechnologiesList>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#e3deea;',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f0f0f0',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <WebAssetIcon fontSize="small" style={{ marginRight: '5px' }} />
                  Ir a la página
                </a>
                <a
                  href={selectedProject.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#e3deea;',
                    marginLeft: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f0f0f0',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <GitHubIcon fontSize="small" style={{ marginRight: '5px' }} />
                  Ver código
                </a>
              </div>
            </>
          )}
        </Box>
      </Modal>
      <Container>
        <SubContainer>
        <ContainerLineTitle>
          <LetterComponent top='-40px'>P</LetterComponent>
          <Title>PROJECTS</Title>
          <Line />
        </ContainerLineTitle>
        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectFrame src={project.url} title={project.title} />
              <MoreInfoButton onClick={() => handleMoreInfo(project)}>
              ¿Quieres saber más?
              </MoreInfoButton>
            </ProjectItem>
          ))}
        </ProjectsList>
      </SubContainer>
      </Container>
    </>
  );
}

export default Projects; 