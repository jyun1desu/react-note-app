import styled from 'styled-components';
import { color } from './style/color';
//components
import Home from './view/NoteApp';
import EditPage from './view/EditNote';

const Page = styled.div`
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: ${color.main_background_color};
`

function App() {
  return (
    <Page>
      <EditPage/>
    </Page>
  );
}

export default App;
