import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import './assets/css/dashboardstyle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router here
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>,
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
