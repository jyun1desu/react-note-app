import styled from 'styled-components';
import { defaultTheme } from '../../style/color';
//redux
import { connect } from 'react-redux';
import { toggleDeleteMode } from '../../redux/actions'
import { useDispatch } from 'react-redux';

const Button = styled.button`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid ${defaultTheme.line_color};
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
            background-color: ${defaultTheme.line_color};
        }
    }

`

const EditButton = (props) => {
    const dispatch = useDispatch();
    function toggleMode(){
        dispatch(toggleDeleteMode());
        props.setDeleteList([]);
    }
    return (
        <Button onClick={()=>toggleMode()}>
            <div className="pattern">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </Button>
    );
}

const mapStateToProps = state => ({
    isDeleteMode: state.deleteMode
})

export default connect(
    mapStateToProps,
    toggleDeleteMode
)(EditButton);