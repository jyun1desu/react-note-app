import styled from 'styled-components';
import { color } from '../../style/color';

const Button = styled.button`
    .button_icon{
        .row{
            font-size: 0;
            &+.row{
                    margin-top: 3px;
                }
            .square{
                &+.square{
                    margin-left: 3px;
                }
                display: inline-block;
                width: 8px;
                height: 8px;
                background-color: ${color.line_color};
        }
        }

    }
`



const button = () => {
    return (
        <Button>
            <div className="button_icon">
                <div className="row">
                    <span className="square"></span>
                    <span className="square"></span>
                </div>
                <div className="row">
                    <span className="square"></span>
                    <span className="square"></span>
                </div>
            </div>
        </Button>
    );
}

export default button;