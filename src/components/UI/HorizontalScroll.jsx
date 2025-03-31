import React from 'react';
import styled from 'styled-components';

const TechnologiesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden; /* Oculta el contenido que se mueve fuera del contenedor */
  background-color: #f4f4f4; /* Color de fondo opcional */
  padding: 10px 0;
`;

const Technologies = styled.div`
  display: flex;
  animation: scroll 20s linear infinite; /* Animación continua */
  
  & > div {
    margin: 0 30px; /* Espaciado entre las tecnologías */
    font-size: 1.2rem;
    color: #333;
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%); /* Comienza fuera de la pantalla por la derecha */
    }
    100% {
      transform: translateX(-100%); /* Termina fuera de la pantalla por la izquierda */
    }
  }
`;

const HorizontalScroll = () => {
  return (
    <TechnologiesWrapper>
      <Technologies>
        <div>React</div>
        <div>Styled-components</div>
        <div>JavaScript</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>Redux</div>
        <div>Node.js</div>
      </Technologies>
    </TechnologiesWrapper>
  );
};

export default HorizontalScroll;
