import styled from 'styled-components';
import { defaultTheme } from '../../style/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import defaultCover from "../../assets/P1013711.jpg";
// import { ThemeProvider } from "styled-components";

const Note = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .primary_mark{
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
            color: ${defaultTheme.non_highlight_color};
            .primary{
                color: ${defaultTheme.highlight_color};
            }
        }
    }
    .note_info{
        flex: 1 1 auto;
        border-radius: 10px;
        background-color: ${defaultTheme.note_block_background};
        margin-left: -15px;
        padding: 10px 15px 10px 25px;
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .note_title{
            font-weight: 600;
        }
        .gallery_cover{
            display: none;
        }
        .note_made_date{
            font-size: 13px;
            color: #fff;
        }
    }

    &.gallery_mode{
        flex: 0 0 auto;
        position: relative;
        box-sizing: border-box;
        .primary_mark{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 35px;
            height: 35px;
            .icon{
            font-size: 18px;
            }
        }
        .note_info{
            padding: 0;
            flex-direction: column;
            background-color: transparent;
            align-items: flex-start;
            margin-left: 0;
            .note_title{
                color: ${defaultTheme.line_color};
                margin: 0 0 3px 0;
                font-size: 17px;
            }
            .gallery_cover{
                display: block;
                width: 38vw;
                height: 38vw;
                border-radius: 0 30px 0 0;
                overflow: hidden;
                position: relative;
                .shine{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 5%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0) 40%);
                }
                img{
                    width:  100%;
                    height: 100%;
                    object-fit: cover;

                }
            }
            .note_made_date{
                color: #000;
                margin-left: auto;
                margin-top: 5px;
            }
        }
    }

    &.deleted_mode{
        .primary_mark{
            display: none;
        }
        .note_info{
            margin-left: 0;
        }
        .deleted_select{
            width: 15px;
            height: 15px;
            border: 1px solid ${defaultTheme.line_color};
            border-radius: 50%;
            margin-left: 7px;
        }

        &.gallery_mode{
            .note_made_date{
                margin-left: 0;
                margin-right: auto;
            }
            .deleted_select{
                position: absolute;
                z-index: 2;
                right: 0;
                bottom: 0;
            }
        }
    }

`

const note = (props) => {
    return (
            <Note className={`${props.nowMode==='gallery'?'gallery_mode':''} ${props.isDeletedMode?'deleted_mode':''}`}>
                <div className="primary_mark">
                    <FontAwesomeIcon icon={faStar} className="icon" />
                </div>
                <div className="note_info">
                    <p className="note_title">Promise</p>
                    <div className="gallery_cover">
                        <div className="shine"></div>
                        <img src={defaultCover} alt=""/>
                    </div>
                    <span className="note_made_date">Dec 25, 2019</span>
                </div>
                <span className="deleted_select"></span>
            </Note>
    );
}

export default note;