import styled from 'styled-components';

export const CotationPageContainer = styled.div`
    align-items: center;
    background-image: linear-gradient(var(--color-primary) 50%, var(--color-pure-white) 50%);
    display: grid;
    grid-template-areas:
        "cotation"
        "fields"
    ;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
    justify-content: center;
    width: 100vw;
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
    ::-webkit-scrollbar   {
        display: none;
    }

    align-items: center;
    background-color: var(--color-secondary);
    border-radius: 6rem;
    color: var(--color-green-dracula);
    display: flex;
    font: 700 15rem Poppins;
    grid-area: cotation;
    height: 290px;
    justify-content: space-between;
    margin: 0 auto;
    overflow-x: auto;
    padding: 0 5rem;
    width: 90%;

    span {
        font-size: 8rem;
    }

    @media (max-width: 900px ) {
        & {
            align-items: flex-center;
            border-radius: 4rem;
            font-size: 6rem;
            height: 150px;
        }

        span {
            font-size: 3rem;
        }
    }
`;