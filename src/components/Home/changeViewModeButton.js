import styled from 'styled-components';
import { defaultTheme } from '../../style/color';
//redux
import { connect } from 'react-redux';
import { changeListMode } from '../../redux/actions'
import { useDispatch } from 'react-redux';
//

const Button = styled.button`
    .button_icon{
        width: 22px;
        height: 22px;
        display: flex;
        flex-direction: column;
        .row{
            flex: 1 1 auto;
            font-size: 0;
            display: flex;
            &:nth-child(3){
                display:none;
            }
            .square{
                flex: 0 1 50%;
                margin: 1.5px;
                background-color: ${defaultTheme.line_color};
            }
        }
        &.gallery_mode{
            .row{
                &:nth-child(3){
                    display: flex;
                }
                .square{
                    &:first-child{
                        flex: 1 1 100%;
                        margin-right:2px;
                    }
            }
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
            className={`button_icon ${props.nowMode==='gallery'?'gallery_mode':''}`}>
                <div className="row">
                    <span className="square"></span>
                    <span className="square"></span>
                </div>
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