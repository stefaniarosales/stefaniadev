import React, { useState, useEffect, useMemo } from "react";
import { useSpring, animated } from "react-spring";

// 1. Constantes fuera del componente para evitar redeclaraciones
const TECHNOLOGIES = [
  "React", "Styled-components", "JavaScript", "HTML", "CSS", 
  "Redux Toolkit", "Git", "GitHub", "Bootstrap", "Sweetalert2",
  "React Router", "Swiper", "Material UI", "Redux Persist"
];

// 2. Custom Hook para manejar el responsive de forma limpia
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Definir estado inicial en el client-side
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
};

const HorizontalScroll = () => {
  const isMobile = useIsMobile();

  // 3. Configuración de animación optimizada
  const scrollAnimation = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-50%)" }, // Solo movemos el 50% porque duplicaremos la lista
    reset: true,
    loop: true,
    config: { duration: 20000, precision: 0.1 }, 
  });

  // 4. Estilos extraídos para mayor claridad
  const containerStyle = {
    width: "100%",
    height: "30px",
    position: "fixed",
    left: 0,
    zIndex: 10,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1a1a1a", // Opcional: fondo para visibilidad
    top: isMobile ? 0 : "auto",
    bottom: isMobile ? "auto" : 0,
  };

  return (
    <aside style={containerStyle} aria-label="Tecnologías">
      <animated.div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform", // Optimización de GPU
          ...scrollAnimation,
        }}
      >
        {/* Duplicamos la lista para crear el efecto de scroll infinito sin saltos */}
        {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            style={{
              color: "#B7B7B7",
              fontSize: "14px",
              fontWeight: "500",
              margin: "0 30px",
              letterSpacing: "1px"
            }}
          >
            {tech.toUpperCase()}
          </span>
        ))}
      </animated.div>
    </aside>
  );
};

export default HorizontalScroll;