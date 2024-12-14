import React, {useState} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { projects } from '../data/projects';
//styles
import { ContainerLineTitle, Title, Line } from '../about/aboutstyled';
import { Container, ProjectsList, ProjectItem, ProjectFrame, ProjectTitle, MoreInfoButton } from './projectsstyled';

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
        <ContainerLineTitle>
          <Title>PROJECTS</Title>
          <Line />
        </ContainerLineTitle>
        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectTitle>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
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