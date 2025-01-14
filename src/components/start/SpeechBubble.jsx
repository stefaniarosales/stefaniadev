import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Estilo de la burbuja con una punta más fina y larga
const Bubble = styled.div`
  position: relative;
  background: ${(props) => props.bgColor || "#f0f8ff"};
  color: ${(props) => props.textColor || "#333"};
  border-radius: 10px;
  padding: 15px;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px; /* Ajusta la posición vertical de la punta */
    left: 10px; /* Ajusta la posición horizontal de la punta */
    border-width: 15px 8px 0 8px; /* Fina y larga: altura y anchura */
    border-style: solid;
    border-color: ${(props) => props.bgColor || "#f0f8ff"} transparent
      transparent transparent;
  }
`;

const SpeechBubble = ({ text, bgColor, textColor }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0], // Salta hacia arriba (-10px) y regresa
      }}
      transition={{
        duration: 0.6, // Duración de un ciclo
        repeat: Infinity, // Animación infinita
        ease: "easeInOut", // Movimiento suave
      }}
    >
      <Bubble bgColor={bgColor} textColor={textColor}>{text}</Bubble>
    </motion.div>
  );
};

export default SpeechBubble;
