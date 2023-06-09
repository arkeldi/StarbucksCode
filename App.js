import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Routes ,Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import PageNotFound from './pages/PageNotFound';
import Manager from './pages/Manager';
import Table from './pages/Table';
import Menu from './pages/Menu';
import Product from './pages/Product';
import Order from './pages/Order';
import LoginButton from './components/loginOAUTH';
import LogoutButton from './components/logoutOAUTH';
import {gapi} from 'gapi-script';

const clientId = "1084493453935-kmj0oh3e6kl1dtintpt3kr74q3seutme.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/product" element={<Product />} />
        <Route path="/table" element={<Table />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <div className="App1">
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

export default styled(App)`
`;