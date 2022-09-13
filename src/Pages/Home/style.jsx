import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(1rem, 1vw, 1.5rem);
`;

export const Wrapper = styled.div`
    width: 95%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: clamp(1rem, 1vw, 1.5rem);

    h2{
        max-width: 55ch;
        font-size: clamp(24px, 4vw, 3rem);
        color: white;
        text-align: center;
    }

    a{
        font-size: clamp(16px, 1.5vw, 2rem);
        color: white;
        text-decoration: underline;
    }
`;    
