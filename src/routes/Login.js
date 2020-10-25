import React, { Component } from "react";
import { Link } from 'react-router-dom';
import firebase from "firebase";
import { Alert } from "reactstrap";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { NETFLIX_APP_LOGGEDIN } from "../utils/helpers";

import "../css/Login.css";

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {//If succeed
        signInSuccessWithAuthResult : () => {
            console.log('connection succeed');
            //localStorage.setItem(NETFLIX_APP_LOGGEDIN, true);
            sessionStorage.setItem(NETFLIX_APP_LOGGEDIN, true);
            return true;
        }
    }
  };

class Login extends Component {

  // Connect without login
  withoutLogin = () => {
    sessionStorage.setItem(NETFLIX_APP_LOGGEDIN, true);
  }

  render() {
    return (
      <div>
        <div className="login">
          <Alert color="primary">
            <h3>You need to login to continue</h3>
          </Alert>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
            uiCallback={(ui) => ui.disableAutoSignIn()}
          />
          <div>
            <Alert color="success">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={this.withoutLogin}
                to={{
                  pathname: `/`,
                }}
              ><h3>Visit the website without login in</h3>
            </Link>
            </Alert>
          </div>
        </div>

      </div>
    );
  }
}

export { Login };