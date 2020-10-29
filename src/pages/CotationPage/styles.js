import styled from 'styled-components';

export const CotationPageContainer = styled.div`
    align-items: center;
    background-image: linear-gradient(var(--color-primary) 50%, var(--color-pure-white) 50%);
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;

    @media (max-width: 900px ) {
        & {
            display: grid;
            grid-template-areas:
                "cotation"
                "fields"
            ;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }
`;

export const Fields = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 900px ) {
        & {
            align-items: center;
            grid-area: fields;
            height: 50vh;
        }
    }
`;

export const CotationValue = styled.h1`
    align-items: center;
    color: var(--color-green-dracula);
    display: flex;
    font: 700 20rem Poppins;
    grid-area: cotation;
    justify-content: center;
    margin-left: 1rem;
    position: relative;

    span {
        font-size: 8rem;
    }

    @media (max-width: 900px ) {
        & {
            align-items: flex-center;
            font-size: 5rem;
            height: 50vh;
            margin-left: 0;
            width: 100%;
        }

        span {
            font-size: 2rem;
        }
    }
`;