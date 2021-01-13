import styled from 'styled-components';
import { darkTheme } from "../style/color";
//components
import NoteList from '../components/Home/notelist';
import SearchBar from '../components/Home/searchbar';
import EditListButton from '../components/Home/editListButton';
import ChangeViewModeButton from '../components/Home/changeViewModeButton';
import HandleNoteAmountButton from '../components/Home/handleNoteAmountButton';
import SettingButton from '../components/Home/settingButton';
//redux
import { connect } from 'react-redux';

const NoteApp = styled.div`
    height:100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
            text-align: center;
            p{
                margin: 0;
                &.main{
                    font-weight: 600;
                    letter-spacing: 1px;
                }
                &.sub{
                    font-size: 12px; 
                    color: #8E8E8E;
                    margin-top: 5px;
                    font-family: 'Mulish', sans-serif;
                    letter-spacing: 1px;
                }
            }
        }
    }
    main{
        margin: 15px 0;
        box-sizing: border-box;
        padding: 0 15px;
        overflow: scroll;
    }
    footer{
        flex: 0 0 auto;
        margin-top: auto;
        display: flex;
        justify-content: space-between;
    }

    &.dark{
        header{
            .title{
                .main{
                    color:#000;
                }
                .sub{
                    color: ${darkTheme.lighter_font_color};
                }
            }
        }
    }
`

function Home(props) {
    return (
        <NoteApp className={props.theme==='dark-theme'?'dark':''}>
            <header>
                <SettingButton />
                <div className="title">
                    <p className="main">All NOTES</p>
                    <p className="sub">Total 5 Notes</p>
                </div>
                <EditListButton />
            </header>
            <SearchBar />
            <main>
                <NoteList />
            </main>
            <footer>
                <ChangeViewModeButton />
                <HandleNoteAmountButton />
            </footer>
        </NoteApp>
    );
}

const mapStateToProps = state => ({
    theme: state.theme
})

export default connect(
    mapStateToProps
)(Home)