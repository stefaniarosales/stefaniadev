import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import { projects } from '../data/projects';
import {
  Container,
  SubContainer,
  TechnologiesList,
  TechnologyIcon,
  ProjectImage,
  MoreInfoButton,
  CarouselContainer,
  ContainerMoreInfoButton
} from './projectsstyled';
import LetterComponent from '../UI/LetterComponent'
import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';


const modalStyle = {
  position: 'absolute',
  top: '55%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgb(83, 83, 83)',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

// Configuración de Slick
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  centerMode: true, // Centra los elementos activos
  centerPadding: "0px", // Elimina el relleno alrededor
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
      {/* Modal para mostrar más información */}
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
                  Ver código
                </a>
              </div>
            </>
          )}
        </Box>
      </Modal>

      {/* Carrusel */}
      <Container>
      <ContainerLineTitle>
        <LetterComponent top='-60px'>P</LetterComponent>
          <Title>
            {"PROJECTS".split("").map((letter, index) => (
              <span key={index} style={{ "--index": index }}>{letter}</span>
            ))}
        </Title>
        <Line />
      </ContainerLineTitle>
        <SubContainer>
          <CarouselContainer>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectImage src={project.image} alt={project.title} />
                <ContainerMoreInfoButton>
                <MoreInfoButton onClick={() => handleMoreInfo(project)}>
                  Ver más
                </MoreInfoButton>
                </ContainerMoreInfoButton>
              </div>
            ))}
          </Slider>
          </CarouselContainer>
        </SubContainer>
      </Container>
    </>
  );
}

export default Projects;
