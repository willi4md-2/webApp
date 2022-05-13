import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
// redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import inventoryReducer from './Components/Reducers/inventory';
import activeReducer from './Components/Reducers/active';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Condensed',
      'sans-serif',
    ].join(','),
  },});

  const store = configureStore({
    reducer: {
      inventory: inventoryReducer,
      active: activeReducer,
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
