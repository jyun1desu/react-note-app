import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
    display: flex;
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    border-radius: 50%;
    padding: 2px;
    box-sizing: border-box;
    .icon{
        font-size: 12px;
    }

    &.dark{
        border: 2px solid #fff;
    }
`

const EditButton = (props) => {
    return (
        <Button className={props.theme==='dark-theme'?'dark':''}>
            <FontAwesomeIcon icon={faCheck} className="icon" />
        </Button>
    );
}

export default EditButton