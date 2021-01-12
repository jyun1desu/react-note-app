import styled from 'styled-components';
import { defaultTheme } from '../style/color';
import DoneButton from '../components/EditPage/addButton';
import TextArea from '../components/EditPage/textArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
//router
import { Link } from 'react-router-dom';

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
                font-size: 16px;
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
                    font-size: 16px;
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
    }
`

function EditNote() {
    const textContent = '';
    const today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = monthNames[today.getMonth()];
    const yyyy = today.getFullYear();
    const todayDateString = `${mm} ${dd}, ${yyyy}`
    return (
        <Page>
            <div className="top_nav">
                <Link to="/" className="back_to_previous">
                    <FontAwesomeIcon icon={faChevronLeft} className="icon" />
                </Link>
                <div className="note_main_info">
                    <input className="note note__title" placeholder="Title" />
                    <p className="note note__made_date">{todayDateString}</p>
                </div>
                <DoneButton />
            </div>
            <div className="note_area">
                <TextArea textContent={textContent} />
            </div>
        </Page>
    )
}

export default EditNote;