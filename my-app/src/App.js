import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.js';
import Profile from './components/profile.jsx';
import Header from './components/header.js';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
