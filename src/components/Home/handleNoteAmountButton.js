import styled from 'styled-components';
import { color } from '../../style/color';

const Button = styled.button`
    .button_icon{
        position: relative;
        width: 16px;
        height: 16px;
        .line{
            display: inline-block;
            width: 100%;
            border-top: 3px solid ${color.line_color};
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            &.vertical{
                transform-origin: center;
                transform: translate(-50%,-50%) rotate(90deg);
            }
        }
    }
`


const button = (props) => {
    return (
        <Button>
            <div className="button_icon plus">
                <span className="line horizantal"></span>
                <span className="line vertical"></span>
            </div>
        </Button>
    );
}

export default button;