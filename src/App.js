import styled from 'styled-components';
import { defaultTheme , darkTheme } from './style/color';
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
//redux
import { connect } from 'react-redux';

const Page = styled.div`
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: ${defaultTheme.main_background_color};
    color: #333;
    transition: .3s all;
    &.dark{
      background-color: ${darkTheme.main_background_color};
      color: #fff;
    }
`

function App(props) {
  return (
    <Router>
      <Page className={props.theme==='dark-theme'?'dark':''}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/new" component={EditPage}/>
          <Route exact path="/setting" component={SettingPage}/>
        </Switch>
      </Page>
    </Router>
  );
}

const mapStateToProps = state => ({
  theme: state.theme
})

export default connect(
  mapStateToProps
)(App)
