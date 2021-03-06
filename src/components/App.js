import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../hoc/auth';
// pages for this product
import LandingPage from './views/LandingPage/LandingPage.js';
import LoginPage from './views/LoginPage/LoginPage.js';
import { Login, Register } from "./views/Autentikasi/index";
import Appjsx from '../components/views/AppJsx/App';
import RegisterPage from './views/RegisterPage/RegisterPage.js';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer copy';
import UploadProductPage from './views/UploadProductPage/UploadProductPage';
import Main from './views/Index/Index';
import About from './views/AboutPage/AboutPage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(Main, null)} /> */}
         {/* <Route exact path ="/Maintenance" component={Auth(Sorry, null)}/>  */}
        <Route exact path="/Cari" component={Auth(LandingPage, null)} /> 
          <Route exact path="/About" component={Auth(About, null)} /> 
          <Route exact path="/login" component={Auth(LoginPage, false)} /> 
           <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          />
        </Switch>
      </div> 
      <Footer/>
    </Suspense>
  );
}

export default App;
