import React,{Component} from 'react';
import axios from 'axios';
import {BiDislike} from "react-icons/bi";

class DisLike extends Component{

    constructor(props){
        super(props);
    }

    disLikeHandler = ((event) => {
        axios
          .put(
            `https://cors-everywhere.herokuapp.com/http://tweetspringapp-env.eba-rpr7tqkk.us-west-2.elasticbeanstalk.com/api/v1.0/tweets/${this.props.email}/dislike/${this.props.id}`
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log("error" + err);
          });
          event.preventDefault();
      });

    render(){
        return(
          <div>
              <button
                    className="btn btn-primary"
                    onClick={this.disLikeHandler}
                  >
                    <BiDislike />
                  </button>
                  <span> {this.props.dislike}</span>
          </div>
        )
    }
}

export default DisLike;