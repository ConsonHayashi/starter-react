import 'tailwindcss/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  positions,
  Provider as AlertProvider,
  transitions,
} from 'react-alert';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { LoginPage } from './pages/auth/login';
import { LogupPage } from './pages/auth/logup';
import { NamePage } from './pages/auth/name';
import { PassPage } from './pages/auth/pass';
import { MainPage } from './pages/home/main';
import { Editor } from './pages/input/editor';
import { NavTest } from './pages/test/nav-test';
import { TestAnijs } from './pages/test/test-anime';
import { TestChartjs } from './pages/test/test-chart';
import { TestIcon } from './pages/test/test-icon';
import { TestRedux } from './pages/test/test-redux';
import { TestTailWind } from './pages/test/test-tailwind';
import store from './store';
import { Alert } from './themes/adminto/alert';

// optional configuration
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

const rootElement = document.getElementById('root')
const getReactRoot = () => {
  return (
    <React.StrictMode>
      <AlertProvider template={Alert} {...alertOptions}>
        <Provider store={store}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<NavTest />} />
              <Route path="/test/" element={<NavTest />} />
              <Route path="/test/animejs" element={<TestAnijs />} />
              <Route path="/test/chartjs" element={<TestChartjs />} />
              <Route path="/test/tailwindcss" element={<TestTailWind />} />
              <Route path="/test/icon" element={<TestIcon />} />
              <Route path="/test/redux" element={<TestRedux />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/logup" element={<LogupPage />} />
              <Route path="/auth/password" element={<PassPage />} />
              <Route path="/auth/name" element={<NamePage />} />
              <Route path="/home/main" element={<MainPage />} />
              <Route path="/home/version" element={<NamePage />} />
              <Route path="/home/about" element={<NamePage />} />
              <Route path="/home/user" element={<NamePage />} />
              <Route path="/input/editor" element={<Editor />} />
            </Routes>
          </HashRouter>
        </Provider>
      </AlertProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(getReactRoot(), rootElement)
