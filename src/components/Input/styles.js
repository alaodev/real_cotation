import styled from 'styled-components';

export const InputContainer = styled.input`
    border: 0;
    border-radius: 3rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: var(--color-grey-text);
    font: 700 2.5rem Poppins;
    height: 10rem;
    margin: 0 2rem;
    padding: 0 4rem;
    width: 300px;

    @media (max-width: 900px ) {
        & {
            border-radius: 2rem;
            font: 700 1.6rem Poppins;
            height: 6rem;
            margin: 0 1rem;
            padding: 0 2rem;
            width: 150px;
        }
    }
`;