import React, { useState } from 'react'
import './login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase1'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()

    // some firebase stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }
  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created new user
        console.log(auth)
        if (auth) {
          history.push('/')
        }
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,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"
          alt="ama"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Condition of Use & Sale.Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}
export default Login
