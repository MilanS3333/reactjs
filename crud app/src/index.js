import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


import "bootstrap5/src/css/bootstrap.min.css"
import ShowData from './crud/ShowData';
import { Provider } from 'react-redux';
import store from './store';
import SubmitForm from './crud/SubmitForm';
import EditData from './crud/EditData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Provider store={store}>
        <ShowData />
        <SubmitForm />
        <Routes>
          <Route path='/EditData/:id' element={<EditData />}></Route>
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
