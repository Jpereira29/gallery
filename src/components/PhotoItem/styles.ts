import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    button {
        background-color: transparent;
        opacity: .3;
        border: none;
        float: right;
        margin-bottom: 5px;
        font-size: 20px;

        &:hover {
            opacity: 1;
        }

    }
`