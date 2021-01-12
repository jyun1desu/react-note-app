import styled from 'styled-components';
import { defaultTheme, darkTheme } from '../../style/color';
//router
import { Link } from 'react-router-dom';
//redux
import { connect } from 'react-redux';

const Setting = styled.button`
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 2px solid ${defaultTheme.line_color};
    border-radius: 50%;
    overflow: hidden;
    background-color: transparent;
    transition: .3s all;
    .profile{
        display: flex;
        flex-direction: column;
        align-items: center;
        .head{
            transition: .3s all;
            width: 8px;
            height: 10px;
            border: 2px solid ${defaultTheme.line_color};
            border-radius: 50%;
            margin: 2px 0;
        }
        .body{
            transition: .3s all;
            width: 25px;
            height: 20px;
            border: 2px solid ${defaultTheme.line_color};
            border-radius: 50%;
        }
    }
    &.dark{
        border: 2px solid ${darkTheme.line_color};
        .profile{
            .head{
            border: 2px solid ${darkTheme.line_color};
        }
        .body{
            border: 2px solid ${darkTheme.line_color};
            }
        }
    }

`

const Button = (props) => {
    return (
        <Setting className={props.theme==='dark-theme'?'dark':''}>
            <Link to="/setting" className="profile">
                <div className="head"></div>
                <div className="body"></div>
            </Link>
        </Setting>
    );
}
const mapStateToProps = state => ({
    theme: state.theme
})

export default connect(
    mapStateToProps
)(Button)