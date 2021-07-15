import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Route exact path='/' component={App}></Route>
          <Route exact path='/menu' component={Menu}></Route>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
