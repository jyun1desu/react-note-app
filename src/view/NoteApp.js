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
`

function Home() {
    return (
        <NoteApp>
            <header>
                <SettingButton />
                <div className="title">
                    <p className="main">ALL NOTES</p>
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