import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import { projects } from '../data/projects';

import { GitHub } from '@mui/icons-material';
import { Web } from '@mui/icons-material';

import {
  Container,
  SubContainer,
  TechnologiesList,
  TechnologyIcon,
  ProjectImage,
  MoreInfoButton,
  ButtonModal,
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
  p: 2,
  textAlign: 'center',
  width: '60%', // Ancho por defecto
  '@media (max-width: 768px)': {
    width: '70%', // Ancho en dispositivos móviles
    p: 1, // Reduce el padding
    top: '50%',
    left: '50%',
  },
};


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ activeIndex, setActiveIndex ] = useState(0);

  const handleMoreInfo = (project) => {
    setSelectedProject(projects[activeIndex]);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Configuración de Slick
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div style={{ marginTop: '20px' }}>
        <ul style={{ margin: '0px', padding: '0px' }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '5px',
          height: '5px',
          background: i === activeIndex ? '#b7b7b7' : '#585858',
          borderRadius: '50%',
          margin: '5px',
        }}
      ></div>
    ),
    centerMode: true, // Centra los elementos activos
    centerPadding: "0px", // Elimina el relleno alrededor
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
  };

  return (
    <>
      {/* Modal para mostrar más información */}
      <Modal open={!!selectedProject} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          {selectedProject && (
            <>
              <h2 style={{ color: '#b7b7b7', fontSize: '20px' }}>{selectedProject.title}</h2>
              <p style={{ color: '#b7b7b7', fontSize: '14px', fontWeight: 'lighter' }}>{selectedProject.description}</p>
              <h3 style={{ color: '#b7b7b7', fontSize: '20px' }}>Tecnologías Utilizadas</h3>
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
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ButtonModal
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Web/>
                  Ir a la página
                </ButtonModal>
                <ButtonModal
                  href={selectedProject.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub/>
                  Ver código
                </ButtonModal>
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
              </div>
            ))}
          </Slider>
          <ContainerMoreInfoButton>
                <MoreInfoButton onClick={() => handleMoreInfo(projects[activeIndex])}>
                  Ver más
                </MoreInfoButton>
                </ContainerMoreInfoButton>
          </CarouselContainer>
        </SubContainer>
      </Container>
    </>
  );
}

export default Projects;
