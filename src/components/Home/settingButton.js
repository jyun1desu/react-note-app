import styled from 'styled-components';
import { color } from '../../style/color';

const Setting = styled.button`
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 2px solid ${color.line_color};
    border-radius: 50%;
    overflow: hidden;
    .profile{
        display: flex;
        flex-direction: column;
        align-items: center;
        .head{
            width: 8px;
            height: 10px;
            border: 2px solid ${color.line_color};
            border-radius: 50%;
            margin: 2px 0;
        }
        .body{
            width: 25px;
            height: 20px;
            border: 2px solid ${color.line_color};
            border-radius: 50%;
        }
    }

`

const button = () => {
    return (
        <Setting>
            <div className="profile">
                <div className="head"></div>
                <div className="body"></div>
            </div>
        </Setting>
    );
}

export default button;