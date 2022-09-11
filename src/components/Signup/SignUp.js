import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor() {
    super();

    this.username = React.createRef();
    this.first_name = React.createRef();
    this.last_name = React.createRef();
    this.password = React.createRef();
    this.email = React.createRef();
    this.age = React.createRef();
    this.gender = React.createRef();
    this.state = {
      error: "",
      success:""
    };
  }

  onSubmitHandler = (event) => {
    let body = {
      username: this.username.current.value,
      first_name: this.first_name.current.value,
      last_name: this.last_name.current.value,
      password: this.password.current.value,
      email: this.email.current.value,
      age: this.age.current.value,
      gender: this.gender.current.value,
    };
    axios
      .post("https://cors-everywhere.herokuapp.com/http://Tweetspringapp-env.eba-rpr7tqkk.us-west-2.elasticbeanstalk.com/api/v1.0/tweets/register", body, {
        data: {},
        headers: { "Content-Type": "application/json" },
        responseType: "text",
      })
      .then((res) => {
        console.log(res.data);
        this.setState({success:"registration completed!"});
        this.setState({error:""});
      })
      .catch((err) => {
        this.setState({
          error:
            "email already exist in the database. Try with different email!..",
        });
      });
    this.username.current.value = "";
    this.first_name.current.value = "";
    this.last_name.current.value = "";
    this.password.current.value = "";
    this.email.current.value = "";
    this.age.current.value = "";
    this.gender.current.value = "";
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <h2>Sign Up!</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label>UserName</label>
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your name!"
                  ref={this.username}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label>FirstName</label>
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  placeholder="Enter your First name!"
                  ref={this.first_name}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label>LastName</label>
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  placeholder="Enter your Last name!"
                  ref={this.last_name}
                
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label>Password</label>
              </div>
              <div className="col-sm">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter the password!"
                  ref={this.password}
                  required
                />
              </div>
            </div>
          </div>
         
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label>Email</label>
              </div>
              <div className="col-sm">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email!"
                  ref={this.email}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label>Age</label>
              </div>
              <div className="col-sm">
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  min="1"
                  max="100"
                  ref={this.age}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-2">
                <label>Gender</label>
              </div>
              <div className="col-sm">
                <select className="form-control" ref={this.gender}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
          <div className="col-sm-3">
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn  btn-success">
                Submit
              </button>
            </div>
          </div>
          <b>{this.state.error}</b>
          <b>{this.state.success}</b>
        </form>
      </div>
    );
  }
}

export default SignUp;
