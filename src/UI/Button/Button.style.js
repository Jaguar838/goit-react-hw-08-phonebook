import styled from 'styled-components';

export const Btn = styled.button`
    cursor: pointer;
    color: #7366ff;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: rgba(115, 102, 255, 0.15);
    transition: all 0.3s ease;

    display: inline-block;
    margin: 0 10px;
    padding: 10px;
    min-width: 120px;
    background-color: #30d5c8;
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.02em;
    text-align: center;
    text-transform: uppercase;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border: none;
    cursor: pointer;
    transition-property: color, background-color, box-shadow;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: #fff;
        background-color: #7366ff;

        color: #30d5c8;
        background-color: #ffffff;
        box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    }
`;
