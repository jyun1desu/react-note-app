import styled from 'styled-components';
import { color } from './style/color';
//components
import Home from './view/NoteApp';
import EditPage from './view/EditNote';
import SettingPage from './view/Setting';
//router
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Page = styled.div`
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: ${color.main_background_color};
`

function App() {
  return (
    <Router>
      <Page>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/new" component={EditPage}/>
          <Route exact path="/setting" component={SettingPage}/>
        </Switch>
      </Page>
    </Router>
  );
}

export default App;
