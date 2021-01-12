import styled from 'styled-components';
import { color } from '../../style/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Note = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .primary_mamrk{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        font-size: 0;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;

        .icon{
            font-size: 16px;
            color: ${color.non_highlight_color};
            .primary{
                color: ${color.highlight_color};
            }
        }
    }
    .note_info{
        flex: 1 1 auto;
        border-radius: 10px;
        background-color: ${color.note_block_background};
        margin-left: -15px;
        padding: 10px 15px 10px 25px;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .note_title{
            font-weight: 600;
        }
        .note_made_date{
            font-size: 13px;
            color: #fff;
        }
    }

`

const note = () => {
    return (
        <Note>
            <div className="primary_mamrk">
                <FontAwesomeIcon icon={faStar} className="icon" />
            </div>
            <div className="note_info">
                <p className="note_title">非同步：Promise</p>
                <span className="note_made_date">Dec 25, 2019</span>
            </div>
        </Note>
    );
}

export default note;