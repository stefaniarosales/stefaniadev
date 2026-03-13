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
        
        --glass-bg: rgba(13, 13, 18, 0.75);
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
        background-color: var(--bg-primary);
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        background-blend-mode: overlay;
        background-size: 150px;

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
    padding-left: 200px;
    min-height: 100vh;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 0;
        padding-top: 70px;
    }
`
