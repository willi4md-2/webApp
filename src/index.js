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
import userReducer from './Components/Reducers/user';
import inventoryFlagReducer from './Components/Reducers/inventoryFlag';
// redux persist
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import { persistStore, persistReducer } from 'redux-persist'

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
      inventoryFlag: inventoryFlagReducer,
      active: activeReducer,
      user: userReducer,
    },
  });

  // const persistConfig = {
  //   key: 'root',
  //   storage,
  // }

  // const persistedReducer = persistReducer(persistConfig, store)

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