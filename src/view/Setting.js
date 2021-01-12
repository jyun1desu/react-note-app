import styled from 'styled-components';
import { color } from '../style/color';
import SettingButton from '../components/Home/settingButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
//router
import { Link } from 'react-router-dom';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    header{
        display: flex;
        justify-content:  space-between;
        align-items: center;
        .title{
            text-align: center;
            p{
                margin: 0;
                &.main{
                    font-weight: 600;
                    letter-spacing: 1px;
                }
                &.sub{
                    font-size: 12px; 
                    color: ${color.line_color};
                    margin-top: 5px;
                    font-family: 'Mulish', sans-serif;
                    letter-spacing: 1px;
                }
            }
        }

        .close_button{
            text-decoration: none;
            font-size: 0;
            .cross{
                font-size: 32px;
                line-height: 32px;
                color: ${color.line_color};
            }
        }
    }
    main{
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
        .setting_list{
            .setting{
            display: flex;
            align-items: center;
            & + .setting{
                margin-top: 20px;
            }
            &>.icon{
                flex: 0 0 25px;
                text-align: center;
                font-size: 18px;
            }
            .title{
                margin: 0 0 0 10px;
                font-weight: 600;
            }
        }
        }
    }
    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .mode_toggle{
            display: flex;
            .toogler{
                width: 45px;
                height: 18px;
                margin-left: 10px;
                border-radius: 20px;
                background-color: ${color.line_color};

                .switch_button{
                    display: inline-block;
                    height: 100%;
                    width: 18px;
                    border-radius: 9px;
                    background-color: #fff;
                    transform: translateX(4px);
                }
            }
        }
    }
`

function Setting() {
    return (
        <Page>
            <header>
                <SettingButton />
                <div className="title">
                    <p className="main">Jyunyi</p>
                    <p className="sub">Setting</p>
                </div>
                <Link to="/" className="close_button">
                    <div className="cross">×</div>
                </Link>
            </header>
            <main>
                <div className="setting_list">
                    <div className="setting account">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUserCircle} className="icon" />
                        </div>
                        <p className="title">Account</p>
                    </div>
                    <div className="setting deleted_notes">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTrashAlt} className="icon" />
                        </div>
                        <p className="title">Deleted</p>
                    </div>
                    <div className="setting marked_notes">
                        <div className="icon">
                            <FontAwesomeIcon icon={faStar} className="icon" />
                        </div>
                        <p className="title">Starred</p>
                    </div>
                </div>
            </main>
            <footer>
                <div className="mode_toggle">
                    <span>Mode</span>
                    <div className="toogler">
                        <span className="switch_button"></span>
                    </div>
                </div>
                <div className="logout">Log out</div>
            </footer>
        </Page>
    )
}

export default Setting;