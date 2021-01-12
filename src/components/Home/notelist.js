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
    return (
        <List className={props.nowMode==='gallery'?'gallery_mode':''}>
            <Note nowMode={props.nowMode}/>
            <Note nowMode={props.nowMode}/>
            <Note nowMode={props.nowMode}/>
            <Note nowMode={props.nowMode}/>
            <Note nowMode={props.nowMode}/>
            <Note nowMode={props.nowMode}/>
            <Note nowMode={props.nowMode}/>
            <Note nowMode={props.nowMode}/>
            <Note nowMode={props.nowMode}/>
        </List>
    );
}

const mapStateToProps = state => ({
    nowMode: state.listMode
})

export default connect(
    mapStateToProps
  )(NoteList)