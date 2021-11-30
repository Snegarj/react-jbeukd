import React, { Component } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';

import TextField from '@mui/material/TextField';

import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
      status: false,
      open: false,
    };
  }

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  signIn = () => {
    if (this.state.status) {
      this.setState({
        status: false
      })
    } else {
      this.setState({ status: true })
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.status ? (
          <Profile      status={this.state.status} />
        ) : (
          <header className="App-header">
            <div className="Login">
              <h2> Login In </h2>
              <TextField
              className="TextField"
                id="outlined-search"
                label="Username"
                type="search"
              />
              <TextField
                   className="TextField"
                id="outlined-search"
                label="Password"
                type="search"
              />

              <div className="Button">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.signIn()
                  }}
                >
                  Log In
                </Button>
              </div>
            </div>
            
          </header>
        )}
      </div>
    );
  }
}

export default App;
