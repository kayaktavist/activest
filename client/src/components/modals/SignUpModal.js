import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import { Card, CardHeader, CardContent, CardHeaderTitle } from "bloomer";
import { signup } from "../../state/auth/actions";

import { createAction } from "redux-actions";
import API from "../../utils/API";
import { closeModal } from "../../state/modal/actions";

function SignUpModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <Modal>
      <Card>
        <CardHeader>
          <CardHeaderTitle>Create an Account!</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          
            <div className="field">
              <label className="label" htmlFor="email">
                Email
            </label>
              <input
                placeholder="burrito@taco.com"
                className="input"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
            </label>
              <input
                placeholder="Secret Sauce"
                className="input"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="rePassword">
                Re Enter Password
            </label>
              <input
                placeholder="Gotta Double Dip"
                className="input"
                name="rePassword"
                value={rePassword}
                onChange={e => setRePassword(e.target.value)}
                type="password"
              />
            </div>
            <div className="has-text-right">
              <button onClick={props.closeModal} className="button is-primary">
                Cancel
            </button>
              <button
                onClick={() => {
                  if (password === rePassword) {
                    console.log("Made it");
                    // props.signup(email, password);

                    API.signUp(email, password)
                      .then(res => {
                        const auth = { ...res.data };
                        auth.authenticated = true;
                        const updateAuth = createAction("UPDATE_AUTH");

                        props.dispatch(closeModal());
                        props.dispatch(updateAuth(auth));
                        console.log("dispatch")



                      })
                  }
                }}
                className="button is-primary"
              >
                Sign Up
            </button>
            </div>
          
        </CardContent>
      </Card>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  signup(email, password) {
    dispatch(signup(email, password))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(SignUpModal);
