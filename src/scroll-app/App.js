import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Layouts
import MainLayout from '../layouts/MainLayout';
import ScrollToTop from './ScrollToTop/ScrollToTop';
//Pages
import Navbar from '../components/Navbar/Navbar';
import SideNav from '../components/Navbar-SideNav/SideNav';
import Home from '../pages/home/Home';
import Checkout from '../pages/Checkout/Checkout';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Shop from '../pages/shop/Shop';
import ProductDetails from '../pages/productdetails/ProductDetails';
//Firebase auth
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
//Redux
import { Provider } from 'react-redux';
//Redux persist
import { PersistGate } from 'redux-persist/integration/react';
//Redux actions
import { setCurrentUser } from '../redux/user/userActions';
//Import modified store and persistor
import { store, persistor } from '../redux/store';
//CSS
import './App.scss';


const App = () => {

  // eslint-disable-next-line
  let unsubscribeFromAuth = null;

  useEffect(() => {
    // eslint-disable-next-line
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //If user is authenticated
      if (userAuth) {
        //Get the userRef that we are returning from the function
        const userRef = await createUserProfileDocument(userAuth);
        //Get the snapshot of the userRef, representing the user in our DB
        userRef.onSnapshot((snapShot) => {
          store.dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }));
        });
      } else {
        //If user is NOT authenticated
        store.dispatch(setCurrentUser(userAuth))
      }
    });
    return () => {
      // eslint-disable-next-line
      unsubscribeFromAuth();
    }
  }, [])

  return (
    <Provider store = {store}>
      <div className = "App">
        <Router>
          <ScrollToTop />
          <Navbar/>
          <SideNav/>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/checkout" component = {Checkout} />
            <Route path = "/register" component = {Register} />
            <Route path = "/shop" render={() => (
              <MainLayout>
                <Shop />
              </MainLayout>
            )} />
            <Route path = "/details/:id" component = {ProductDetails} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}
export default App;