import styled from 'styled-components';
import { color } from '../../style/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { connect } from 'react-redux';

const Button = styled.button`
    .plus_icon{
        display: ${props=>props.isDeleteMode?'none':'block'};
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
    .delete_icon{
        display: ${props=>props.isDeleteMode?'block':'none'};
        color: ${color.line_color};
        font-size: 17px;
    }
`


const HandleButton = (props) => {
    return (
        <Button isDeleteMode={props.isDeleteMode}>
            <FontAwesomeIcon icon={faTrashAlt} className="delete_icon" />
            <div className="plus_icon">
                <span className="line horizantal"></span>
                <span className="line vertical"></span>
            </div>
        </Button>
    );
}

const mapStateToProps = state => ({
    isDeleteMode: state.deleteMode
})

export default connect(
    mapStateToProps
)(HandleButton);