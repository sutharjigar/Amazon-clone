import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase1'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51NYlLHSA71Dhs944ExjKO7ujL0DgPIdzh5CYK9x3DhiLab1c7e1oRWgLvpmn8Y826AXzyB6XmFRWCM6LoJKJxHzW00uX0cU8kY'
)

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    // will only runs when the app component loads ...
    // dynamic if statement in react

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        // the user just logged in / user was login
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
