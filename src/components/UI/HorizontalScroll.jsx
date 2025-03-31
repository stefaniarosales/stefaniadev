import React from 'react';
import { useSpring, animated } from 'react-spring';

const HorizontalScroll = () => {
  // Animación para mover el contenido de derecha a izquierda
  const props = useSpring({
    to: { transform: 'translateX(-100%)' }, // Mueve el contenido a la izquierda
    from: { transform: 'translateX(100%)' }, // Comienza desde la derecha
    reset: true, // Resetea la animación al llegar al final
    reverse: false, // No invierte el ciclo
    config: { duration: 15000 }, // Velocidad de la animación
    loop: true, // Hace que la animación sea infinita
  });

  return (
    <div
      style={{
        width: '100%',
        height: '15px',
        padding: '5px 0',
        position: 'fixed',
        bottom: '0',
        left: '0',
        zIndex: '10',
        overflow: 'hidden', // Esto oculta el contenido fuera del contenedor
        letterSpacing: '1px',
      }}
    >
    {/* Contenedor animado que se mueve de derecha a izquierda */}
    <animated.div style={{ display: 'flex', ...props }}>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#b7b7b7' }}>React</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>Styled components</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>JavaScript</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>HTML</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>CSS</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>Redux Toolkit</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>Git</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>GitHub</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>Bootstrap</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>Sweetalert2</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>React Router</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>Swiper</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>Material UI</div>
        <div style={{ display: 'inline-block', marginRight: '30px', color: '#B7B7B7' }}>Redux persist</div>
    </animated.div>

    </div>
  );
};

export default HorizontalScroll;
