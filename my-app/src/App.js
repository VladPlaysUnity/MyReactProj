import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './components/nav/nav.js';
import Profile from './components/profile/profile.jsx';
import Header from './components/header/header.js';
import DialogsContainer from './components/dialogs/dialogsContainer.jsx';
import News from './components/news/news.jsx';
import Music from './components/music/music.jsx';
import Settings from './components/settings/settings.jsx';

const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Nav sideBar={props.store.getState().sideBar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
            <Route path='/profile/*' element={<Profile store={props.store}/>}/>
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/settings/*' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
