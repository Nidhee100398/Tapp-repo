import React, { Component } from "react";
import axios from "axios";

class Reply extends Component {
  
  constructor(props) {
    super(props);
    this.dataArray=[];
    this.replyTweet = React.createRef();
    this.state = {
      dataArray: [],
      name: window.sessionStorage.getItem("username"),
      email: window.sessionStorage.getItem("email"),
    };
  }
  
   componentDidMount() { this.getReply()}
   componentDidUpdate() {this.getReply()}
   getReply = () => {
     axios
   .get(`https://cors-everywhere.herokuapp.com/http://tweetspringapp-env.eba-rpr7tqkk.us-west-2.elasticbeanstalk.com/api/v1.0/tweets/all`)
    .then((res) => {
      
       this.dataArray=res.data;
      this.setState({dataArray:res.data})
         })
     .catch((err) => {
       console.log(err.data);
      });
   };
  replyHandler = (event) => {
    let content = this.replyTweet.current.value;
    console.log(content);

    let body = {
      username: this.state.name,
      email: this.state.email,
      replyDesc: content,
    };
    axios
      .post(
        `https://cors-everywhere.herokuapp.com/http://tweetspringapp-env.eba-rpr7tqkk.us-west-2.elasticbeanstalk.com/api/v1.0/tweets/${this.props.email}/reply2/${this.props.id}`,
        body
      )
      .then((res) => {
        this.replyTweet.current.value = "";
        this.props.state();
      })
      .catch((err) => {
        console.log("error" + err);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.replyHandler}>
          <div className="row">
            <div className="col-sm-2">
              <textarea
                required
                placeholder="Enter the Reply"
                id="tweet"
                name="tweet"
                ref={this.replyTweet}
              />
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary">Post</button>
            </div>
          </div>
        </form>
        { /* { this.state.dataArray.map((data, index) => (
                <div key={index} className="card" id="reply">
                  <div className="row">
                    <div className="col-sm-4">
                      <b >UserName:</b>
                      <span title={data.tweetemail}>{data.username}</span>
                    </div>
                    <div className="col-sm">
                      <b>Reply:</b>
                      <span>{data.replies}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <small>{data.date}</small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <small>{data.tweet_id}</small>
                    </div>
                  </div>
                </div>
              ))}  */}
      </div>
    );
  }
}

export default Reply;
