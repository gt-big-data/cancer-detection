import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import RecentNews from './components/RecentNews';
import AboutOurModel from './components/AboutOurModel';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home />}/>;
      <Route path = 'recentnews' element = {<RecentNews />}/>;
      <Route path = 'aboutourmodel' element = {<AboutOurModel />}/>;

    </Routes>
  );
}

export default App;
