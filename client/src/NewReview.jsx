import React from 'react';
import styles from './style.css';
import Modal from 'react-modal';
import axios from 'axios';

class NewReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      username: '',
      review: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('input form submit');
    console.log('.href:', window.location.href);
    let urlArr = window.location.href.split('/');
    let id = urlArr[urlArr.length - 2]; //get the id from url bar
    let username = this.state.username;
    let review = this.state.review;

    axios.post(`http://localhost:3003/api/reviews/${id}`, {username: username, review: review})
    .then(res => {
      console.log('post data:', res.data);
      this.setState({reviews: this.state.reviews.push(res.data)})
    });
  }

  render() {
    return (
      <div className="newReview">
        <p className="marginBottom">My Review for Bose® SoundTouch® 20 Series III Wireless Music System - Black</p>

        <form onSubmit={this.handleSubmit}>

          <div className="inputField">Rating
          &#9734;&#9734;&#9734;&#9734;&#9734;
          </div>


          <label>Title:</label><br />
          <input type="text"
            placeholder="Example: Great features!"
            className="inputField"/><br />

          <label>Review:</label><br />
          <textarea type="text" name="review"
            placeholder="Example: I bought this a month ago and am so happy that I did..."
            className=" inputField reviewInput"
            onChange={this.handleInputChange}
          >
          </textarea><br />

          <label>Nickname:</label><br />
          <input type="text" name="username"
            placeholder="Example: jackie272"
            className="inputField"
            onChange={this.handleInputChange}/><br />

          <label>Location:</label><br />
          <input type="text"
            placeholder="Example: New York, NY"
            className="inputField"/><br />

          <label>Email:</label><br />
          <input type="text"
            placeholder="Example: youremail@example.com"
            className="inputField"/><br />

          <button type="submit" value="submit"
            className="postBtn">
            Post Review
          </button>

        </form>

        <p className="msg">You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.
        </p>
      </div>
    )
  }

}


export default NewReview;