import styled from 'styled-components';
import { color } from '../style/color';
import DoneButton from '../components/EditPage/addButton';
import TextArea from '../components/EditPage/textArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Page = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    .top_nav{
        display: flex;
        justify-content:  space-between;
        align-items: center;
    }
    .note_main_info{
        text-align: center;
        .note{
            margin: 0;
            &__title{
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 5px;
            }
            &__made_date{
                font-size: 13px;
                color: ${color.line_color};
            }
        }
    }
    .note_area{
        margin: 30px 10px 0;
        flex: 1 1 auto;
    }
`

function EditNote(){
    const textContent = '';
    return (
        <Page>
            <div className="top_nav">
                <button className="back_to_previous">
                    <FontAwesomeIcon icon={faChevronLeft} className="icon" />
                </button>
                <div className="note_main_info">
                    <p className="note note__title">Promise</p>
                    <p className="note note__made_date">Dec 25, 2019</p>
                </div>
                <DoneButton/>
            </div>
            <div className="note_area">
                <TextArea textContent={textContent} />
            </div>
        </Page>
    )
}

export default EditNote;