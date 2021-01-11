import styled from 'styled-components';
import { color } from '../style/color';
//components
import NoteList from '../components/Home/notelist';
import SearchBar from '../components/Home/searchbar';
import EditListButton from '../components/Home/editListButton';
import ChangeViewModeButton from '../components/Home/changeViewModeButton';
import HandleNoteAmountButton from '../components/Home/handleNoteAmountButton';
import SettingButton from '../components/Home/settingButton';

const NoteApp = styled.div`
    height:100%;
    background-color: ${color.main_background_color};
    padding: 20px;
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
                }
            }
        }
    }
    main{
        width: 92%;
        margin: 0 auto;
    }
    footer{
        margin-top: auto;
        display: flex;
        justify-content: space-between;
    }
`

function Home() {
    return (
        <NoteApp>
            <header>
                <SettingButton />
                <div className="title">
                    <p className="main">All NOTES</p>
                    <p className="sub">Total 5 Notes</p>
                </div>
                <EditListButton />
            </header>
            <main>
                <SearchBar />
                <NoteList />
            </main>
            <footer>
                <ChangeViewModeButton />
                <HandleNoteAmountButton type="plus" />
            </footer>
        </NoteApp>
    );
}

export default Home;