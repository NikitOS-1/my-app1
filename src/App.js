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

let postData = [
  { post: 'new post', likeCount: 0 },
  { post: 'YOOO', likeCount: 13 },
  { post: 'HELOOw ', likeCount: 345 },
  { post: ' NSMA', likeCount: 34 },
  { post: 'new kjdjd', likeCount: 74 },
  { post: 'new POSTII', likeCount: 14 },
  { post: ' Lorem', likeCount: 324 },
  { post: 'new What', likeCount: 0 },
  { post: 'new sds', likeCount: 39 }
];

let messageData = [
  {
      userName: 'Nikita',
      userId: 1,
      message: 'Hello im nikita'
  }, {
      userName: 'Sasha',
      userId: 2,
      message: 'Hello im Sasha'
  }, {
      userName: 'Sasha',
      userId: 2,
      message: 'Hello im Sasha'
  }, {
      userName: 'Sasha',
      userId: 2,
      message: 'Hello im Sasha'
  }, {
      userName: 'Sasha',
      userId: 2,
      message: 'Hello im Sasha'
  }, {
      userName: 'Sasha',
      userId: 2,
      message: 'Hello im Sasha'
  }, {
      userName: 'Sasha',
      userId: 2,
      message: 'Hello im Sasha'
  }, {
      userName: 'Sasha',
      userId: 2,
      message: 'Hello im Sasha'
  }
];

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/profile/*' element={<Profile postData={postData} />} />
            <Route path='/messages/*' element={<Messages messageData={messageData}/>} />
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
