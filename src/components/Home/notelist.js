import Note from './note';
import styled from 'styled-components';
//redux
import { connect } from 'react-redux';


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

const NoteList = (props) => {
    const notes = props.notes;
    return (
        <List className={props.nowMode === 'gallery' ? 'gallery_mode' : ''}>
            {notes.map((note,index)=>{
                return <Note 
                nowMode={props.nowMode} 
                isDeletedMode={props.isDeletedMode} 
                note={note}
                key={index}
                />
            })}
        </List>
    );
}

const mapStateToProps = state => ({
    nowMode: state.listMode,
    isDeletedMode: state.deleteMode,
    notes: state.noteList
})

export default connect(
    mapStateToProps
)(NoteList)