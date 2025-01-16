import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// styles
import {
  Container,
  SubContainer,
  ProjectsList,
  ProjectImage,
  MoreInfoButton,
  TechnologiesList,
  TechnologyIcon,
  NavigationButton,
  PaginationDots,
  StyledSwiper,
  StyledSwiperSlide,
} from './projectsstyled';

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import LetterComponent from '../UI/LetterComponent';
import { projects } from '../data/projects';

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
      <Modal open={!!selectedProject} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          {selectedProject && (
            <>
              <h2 style={{ color: '#b7b7b7' }}>{selectedProject.title}</h2>
              <p style={{ color: '#b7b7b7' }}>{selectedProject.description}</p>
              <h3 style={{ color: '#b7b7b7' }}>Tecnologías Utilizadas</h3>
              <TechnologiesList>
                {selectedProject.technologies.map((technology) => (
                  <li key={technology}>
                    <TechnologyIcon
                      src={`./technologies/${technology.toLowerCase()}.svg`}
                      alt={technology}
                    />
                  </li>
                ))}
              </TechnologiesList>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: '#e3deea',
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
                    textDecoration: 'none',
                    color: '#e3deea',
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
        <ContainerLineTitle>
          <LetterComponent top="-70px">P</LetterComponent>
          <Title>
            {'PROJECTS'.split('').map((letter, index) => (
              <span key={index} style={{ '--index': index }}>
                {letter}
              </span>
            ))}
          </Title>
          <Line />
        </ContainerLineTitle>
        <SubContainer>
          <StyledSwiper pagination={{ clickable: true }} modules={[Pagination]}>
            {projects.map((project, index) => (
              <StyledSwiperSlide key={index}>
                <ProjectImage src={project.image} alt={project.title} />
                <MoreInfoButton onClick={() => handleMoreInfo(project)}>
                  ¿Quieres saber más?
                </MoreInfoButton>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </SubContainer>
      </Container>
    </>
  );
}

export default Projects;
