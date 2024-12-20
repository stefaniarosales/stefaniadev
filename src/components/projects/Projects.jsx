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
                      <TechnologyIcon src="./public/technologies/html.svg" alt="HTML" />
                    )}
                    {technology === 'CSS' && (
                      <TechnologyIcon src="./public/technologies/css.svg" alt="CSS" />
                    )}
                    {technology === 'Git' && (
                      <TechnologyIcon src="./public/technologies/git.svg" alt="Git" />
                    )}
                    {technology === 'Javascript' && (
                      <TechnologyIcon src="./public/technologies/javascript.svg" alt="javascript" />
                    )}
                    {technology === 'React' && (
                      <TechnologyIcon src="./public/technologies/react.svg" alt="react" />
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
                    color: '#1976d2',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f0f0f0',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <WebAssetIcon fontSize="small" style={{ marginRight: '5px' }} />
                  Visit Website
                </a>
                <a
                  href={selectedProject.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#1976d2',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f0f0f0',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <GitHubIcon fontSize="small" style={{ marginRight: '5px' }} />
                  GitHub Repository
                </a>
              </div>
            </>
          )}
        </Box>
      </Modal>
      <Container>
        <SubContainer>
        <ContainerLineTitle>
          <Title>PROJECTS</Title>
          <Line />
        </ContainerLineTitle>
        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              {/* <ProjectTitle>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </ProjectTitle> */}
              
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