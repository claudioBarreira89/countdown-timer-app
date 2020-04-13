import styled from "styled-components";

export const StyledCounter = styled.div`
    flex: 1;
    font-size: 65px;
    padding: 5px;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 180px;
        width: 180px;
        position: relative;
        margin: auto;
        text-align: center;
    }

    svg {
        position: absolute;
        transition: 0.35s stroke-dashoffset;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
`;

export const StyledLabel = styled.span`
    font-size: 16px;
    line-height: 1;
`;
