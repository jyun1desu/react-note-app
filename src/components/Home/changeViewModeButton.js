import styled from 'styled-components';
import { color } from '../../style/color';
//redux
import { connect } from 'react-redux';
import { changeListMode } from '../../redux/actions'
import { useDispatch } from 'react-redux';
//

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

const ModeButton = (props) => {
    const dispatch = useDispatch();
    function handleChangeMode(){
        if(props.nowMode==='list'){
            dispatch(changeListMode('gallery'));
        }else{
            dispatch(changeListMode('list'));
        }
    }

    return (
        <Button>
            <div 
            onClick={()=>{handleChangeMode()}}
            className="button_icon">
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

const mapStateToProps = state => ({
    nowMode: state.listMode
})

export default connect(
    mapStateToProps,
    changeListMode
  )(ModeButton)