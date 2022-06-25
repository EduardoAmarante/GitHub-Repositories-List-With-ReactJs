import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #24a0ed;
    color: #fff;
    padding: .5rem;
    border-radius: .25rem;

`
export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    border: 1px solid #253B55;
    text-decoration: none;
    padding: .5rem 0;
    color: #253B55;
    font-family: sans-serif;
    border-radius: .35rem;
`