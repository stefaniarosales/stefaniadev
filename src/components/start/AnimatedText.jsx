import React from "react";
import { motion } from "framer-motion";
import { Container } from "./animatedtextstyled";

const AnimatedText = () => {
  const text = "DEVELOPER FRONTEND";
  // Variantes para la animación
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Tiempo entre letras
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </Container>
  );
};

export default AnimatedText;
