import styled from 'styled-components';
import { defaultTheme } from '../style/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
//components
import DoneButton from '../components/EditPage/addButton';
import TextArea from '../components/EditPage/textArea';
import Date from '../components/EditPage/todayDate';
//router
import { Link } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
import { addNote } from '../redux/actions'
import { useDispatch } from 'react-redux';

const Page = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    .top_nav{
        display: flex;
        justify-content:  space-between;
        align-items: center;
        .icon{
            color: #000;
        }
    }
    .note_main_info{
        text-align: center;
        .note{
            margin: 0;
            &__title{
                font-size: 18px;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 5px;
                background-color: transparent;
                border: none;
                text-align: center;
                padding: 0;
                &:focus{
                    outline: none;
                }
                &::placeholder{
                    font-size: 18px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    color:#999;
                }
            }
            &__made_date{
                font-size: 13px;
                color: ${defaultTheme.line_color};
            }
        }
    }
    .note_area{
        margin: 30px 10px 0;
        flex: 1 1 auto;
        overflow: scroll;
    }

    &.dark{
        .top_nav{
            .icon{
                color: #fff;
            }
        }
        .note_main_info{
            .note{
                &__title{
                    color: #fff;
                    &::placeholder{
                        color: #fff;
                    }
                }
            }
        }
    }
`

function EditNote(props) {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteMadeDate, setNoteMadeDate] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const dispatch = useDispatch();
    
    function handleSubmit() {
        const note = {
            title: noteTitle || 'No Title',
            madeDate: noteMadeDate,
            content: noteContent
        }
        dispatch(addNote(note));
    }

    return (
        <Page className={props.theme === 'dark-theme' ? 'dark' : ''}>
            <div className="top_nav">
                <Link to="/" className="back_to_previous">
                    <FontAwesomeIcon icon={faChevronLeft} className="icon" />
                </Link>
                <div className="note_main_info">
                    <input
                        className="note note__title"
                        placeholder="Title"
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)} />
                    <Date setNoteMadeDate={setNoteMadeDate} />
                </div>
                <DoneButton theme={props.theme} handleSubmit={handleSubmit} />
            </div>
            <div className="note_area">
                <TextArea
                    theme={props.theme}
                    setNoteContent={setNoteContent}
                />
            </div>
        </Page>
    )
}

const mapStateToProps = state => ({
    theme: state.theme,
    noteList: state.noteList
})

export default connect(
    mapStateToProps,
    addNote
)(EditNote)