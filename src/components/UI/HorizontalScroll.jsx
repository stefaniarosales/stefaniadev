import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const HorizontalScroll = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detecta el cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animación de desplazamiento de derecha a izquierda
  const scrollAnimation = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-100%)" },
    reset: true,
    loop: true,
    config: { duration: 15000 }, // Velocidad de la animación
  });

  const technologies = [
    "React", "Styled-components", "JavaScript", "HTML", "CSS", 
    "Redux Toolkit", "Git", "GitHub", "Bootstrap", "Sweetalert2",
    "React Router", "Swiper", "Material UI", "Redux Persist"
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "25px",
        position: "fixed",
        left: "0",
        zIndex: "10",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        top: isMobile ? "0" : "auto",
        bottom: isMobile ? "auto" : "0",
      }}
    >
      <animated.div
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          ...scrollAnimation,
        }}
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            style={{
              color: "#B7B7B7",
              fontSize: "14px",
              margin: "0 20px",
            }}
          >
            {tech}
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default HorizontalScroll;
