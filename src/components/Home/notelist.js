import Note from './note';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    &.gallery_mode{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const noteList = () => {
    return (
        <List className="gallery_mode">
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