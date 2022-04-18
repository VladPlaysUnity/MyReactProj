import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavContainer from './components/nav/navContainer.jsx';
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
        <NavContainer/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />}/>
            <Route path='/profile/*' element={<Profile />}/>
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
