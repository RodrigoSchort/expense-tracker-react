import styled from "styled-components";

export const Container = styled.div`
    display: inline-block;
    margin: 0 40px;
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`;

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`;