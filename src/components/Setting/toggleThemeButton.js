import styled from 'styled-components';
import { color } from '../../style/color';
//redux
import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/actions'
import { useDispatch } from 'react-redux';

const Toggler = styled.div`
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
        transition: all .3s;
        &.default{
            transform: translateX(4px);
        }
        &.dark{
            transform: translateX(24px);
        }
    }
`

function Button(props) {
    const dispatch = useDispatch();
    console.log(props.theme)
    function switchTheme() {
        if(props.theme==='default'){
            dispatch(toggleTheme('dark-theme'));
        }else{
            dispatch(toggleTheme('default'));
        }
    }
    return (
        <Toggler onClick={() => { switchTheme() }}>
            <span className={`switch_button ${props.theme==='dark-theme'?'dark':'default'}`}></span>
        </Toggler>
    )
}

const mapStateToProps = state => ({
    theme: state.theme
})

export default connect(
    mapStateToProps,
    toggleTheme
)(Button)