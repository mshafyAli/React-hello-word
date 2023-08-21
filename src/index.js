import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import profileImage  from './images/profile pic.jfif'

function Hi() {
  return <div>
    <img src= {profileImage} alt='Profile Pic' />
    <h1>Shafy Ali</h1>
  <ul>
    <li>
      <a href='https://github.com/mshafyAli'>Github</a>
    </li>
    <li><a href='https://www.linkedin.com/feed/'>linkedin</a>
    </li>
    <li>
      <a href='https://www.facebook.com/'>FaceBook</a>
    </li>
    <li>
      <a href='https://twitter.com/Shafy_alii'>Twitter</a>
    </li>
    <li>
      <a href='https://www.instagram.com/'>Instagram</a>
    </li>
  </ul>

  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));