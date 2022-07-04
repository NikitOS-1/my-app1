import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/MainRender/Profile/Profile';
import Messages from './components/MainRender/Messages/Messages';
import News from './components/MainRender/News/News';
import Music from './components/MainRender/Music/Music';
import Settings from './components/MainRender/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar friendData={props.state.users} />
        <div className='content'>
          <Routes>
            <Route path='/profile/*' element={
              <Profile
                postData={props.state.posts}
                addPost={props.addPost} />
            } />
            <Route path='/messages/*' element={
              <Messages messageData={props.state.messages} />
            } />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
