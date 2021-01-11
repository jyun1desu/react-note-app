import styled from 'styled-components';
import { color } from '../../style/color';

const Button = styled.button`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid ${color.line_color};
    border-radius: 50%;
    padding: 2px;
    box-sizing: border-box;

    .pattern{
        display:flex;
        justify-content: space-around;
        .dot{
            display: inline-block;
            width: 2px;
            height: 2px;      
            border-radius: 50%;
            background-color: ${color.line_color};
        }
    }

`

const button = () => {
    return (
        <Button>
            <div className="pattern">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </Button>
    );
}

export default button;