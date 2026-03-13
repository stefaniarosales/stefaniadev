import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const GlobalStyled = createGlobalStyle`

    :root {
        --bg-primary: #0d0d12;
        --bg-secondary: #16161e;
        --bg-card: rgba(255, 255, 255, 0.05);
        
        --lavanda-light: #E0B1CB;
        --lavanda-medium: #BE95C4;
        --lavanda-dark: #9F86C0;
        
        --text-primary: #FFFFFF;
        --text-secondary: #B7B7B7;
        --text-muted: #6B6B7B;
        
        --gradient-lavanda: linear-gradient(135deg, #E0B1CB 0%, #BE95C4 50%, #9F86C0 100%);
        --glow-lavanda: 0 0 20px rgba(190, 149, 196, 0.5);
        --glow-lavanda-strong: 0 0 30px rgba(190, 149, 196, 0.7);
        
        --glass-bg: rgba(13, 13, 18, 0.85);
        --glass-border: rgba(255, 255, 255, 0.1);
        --glass-blur: blur(15px);
        
        --font-primary: 'Inter', sans-serif;
        --font-display: 'Space Grotesk', sans-serif;
    }

    html,body {
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
        font-family: var(--font-primary);
        color: var(--text-primary);
        background: 
            radial-gradient(ellipse at 20% 20%, rgba(159, 134, 192, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(224, 177, 203, 0.1) 0%, transparent 50%),
            linear-gradient(180deg, #0d0d12 0%, #16161e 100%);

        @media (max-width: 768px) {
            overflow: auto;
            overflow-x: hidden;
        }
    }
    
    main {
        box-sizing: content-box;
        overflow-y: auto;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    li {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-display);
    }
    
    * {
        box-sizing: border-box;
    }
    
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: var(--bg-secondary);
    }
    
    ::-webkit-scrollbar-thumb {
        background: var(--lavanda-dark);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: var(--lavanda-medium);
    }
    
`

export const ContainerGeneral = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding-left: 200px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 0;
        padding-top: 70px;
    }
`
