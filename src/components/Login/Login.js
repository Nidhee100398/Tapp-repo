import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Login.css";
function Login() {

  const history=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.target.value)
  }
  const onPassHandler = (event) => {
    setPassword(event.target.value)
  }

 const  onSubmitHandler =  (event) => {
    event.preventDefault();
       fetch("https://cors-everywhere.herokuapp.com/http://tweetappnew.us-west-2.elasticbeanstalk.com/api/v1.0/tweets/login", {
      method: "POST",{
         mode:'cors'},
      headers: {
        "Content-Type": "application/json",
             'Accept':'application/json',
        'Access-Control-Allow-Origin':'*'
      }, body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((res) => {
        if(res.status===200){
        const result = res.json();
        result.then((val)=>{
          console.log(val)
        localStorage.setItem("username", val.username);
        localStorage.setItem("email", val.email);
        })
        
        history("/Home")
        }else{
        window.alert("login Failed");
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: "Please Check your credentials!" });
      });
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-2">
              <label>Email</label>
            </div>
            <div className="col-sm">
              <input
                type="email"
                className="form-control"
                id="email1"
                placeholder="Enter your email!"
                required
                onChange={onEmailHandler}
                value={email}
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
                id="exampleInputPassword1"
                placeholder="Enter the password!"
                required
                value={password}
                onChange={onPassHandler}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3">
            <button type="submit" className="btn  btn-success">
              Submit
            </button>
          </div>
          <div className="col-sm-4">
            <Link to="/forgot" className="btn btn-primary">Forget Password</Link>
          </div>
        </div>
        {/*<b>e.error}</b>*/}
      </form>
    </div>
  );

}

export default Login;
