import React, { useRef, createRef } from "react";
import { connect } from 'react-redux'
import { change_userName, change_passWord } from './Actions/types'

import './App.css'


class App extends React.Component {

  onUserSubmit = event => {
    event.preventDefault();

    const { userName, passowrd } = this.state
    console.log(userName, passowrd);

  };


  render() {
    return (
      <div className="App">
        <div className="loginbox">
          <img
            className="avatar"
            alt="profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3Nw8Rc-b0VL9GkaoIuIYMKNI6b6qBQ-PwTHn2gZN2lld822Gp"
          />
          <h1>Login Here </h1>
          <form>
            <lable>Username</lable>
            <input
              type="email"
              required={true}
              name=""
              placeholder="Enter username"
              value={this.state.userName}
              onChange={e => {
                this.setState({ userName: e.target.value });
              }}
            />
            <label for="psw">Password</label>
            <input
              type="password"
              required="true"
              placeholder="Enter passowrd"
              id="psw"
              name="psw"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              value={this.state.passowrd}
              onChange={event => {
                this.setState({ passowrd: event.target.value });
              }}
            />
            <input type="submit" onClick={this.onUserSubmit} />
            <a href="#">Lost your Password ? </a> <br />
            <a href="#">Don't have an account?</a>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    userName: state.userName,
    password: state.password
  };
};

export default connect(
  mapStateToProps,
  { change_userName, change_passWord }
)(App);
