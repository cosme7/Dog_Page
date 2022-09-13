import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: clamp(1rem, 1vw, 1.5rem);

    h1{
        font-size: clamp(32px, 4vw, 4rem);
        color: white;
        text-align: center;
    }

    a{
        font-size: clamp(16px, 1.5vw, 2rem);
        color: white;
        text-decoration: underline;
    }

    img{
        width: clamp(300px, 30%, 700px);
        border: 5px solid red;
    }

    button{
        padding: 0.5em 1em;
        border-radius: 5px;
        font-size: clamp(16px, 1vw, 1.5rem);
        font-weight: 500;
        color: white;
        background-color: purple;
        border: none;
        cursor: pointer;
    }

    button:where(:hover, focus-visible){
        font-weight: 700;
        color: purple;
        background-color: white;
    }
`;