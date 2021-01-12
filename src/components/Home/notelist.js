import Note from './note';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
`

const noteList = () => {
    return (
        <List>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </List>
    );
}

export default noteList;