import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
`

export const Button = styled.button`
        border: 1px solid #24a0ed;
        height: 1.6rem;
        background: #24a0ed;
        color: #fff;
        border-radius: 0 .25rem .25rem 0;

        &:focus,
        &:active {
        outline: none;
        box-shadow: none;
`
export const HomeContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
`

export const Content = styled.div`
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
`
export const ErrorMsg = styled.span`
        display: block;
        color: #f00;
        font-size: 1.2rem;
        font-family: sans-serif;
        text-align: center;
        margin: 1rem 0;
        fonte-weight: bold;
`