import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <Switch>

              <Route path='/register' component={RegisterScreen} exect />
              <Route path='/login' component={LoginScreen} exect />
              <Route path='/profile' component={ProfileScreen} exect />
              <Route path='/Product/:id' component={ProductScreen} exect />
              <Route path='/cart/:id?'  component={CartScreen} exect />
              <Route path='/' component={HomeScreen} exect/>
           
          </ Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
