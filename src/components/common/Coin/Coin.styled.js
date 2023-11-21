import styled from "styled-components"

export const Coin = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffd700 30%, #e6ac00 70%);
    /* Gradiente para efeito mais realista */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    /* Cor do texto, ajuste conforme necessário */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    /* Sombra para efeito tridimensional */
    position: relative;
    overflow: hidden;
    margin: 15px;
    
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 85px;
        height: 85px;
        background: rgba(255, 255, 255, 0.5);
        /* Reflexo branco para efeito de brilho */
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Value = styled.span`
    z-index: 1;
    font-size: 1.6em;
    /* Tamanho do texto dentro do span */
    color: #000125;
    /* Cor do texto dentro do span */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    /* Sombra de texto para destaque */
`;