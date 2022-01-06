import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './components/nav/nav.js';
import Profile from './components/profile/profile.jsx';
import Header from './components/header/header.js';
import Dialogs from './components/dialogs/dialogs.jsx';
import News from './components/news/news.jsx';
import Music from './components/music/music.jsx';
import Settings from './components/settings/settings.jsx';

const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.sideBar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
            <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
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
