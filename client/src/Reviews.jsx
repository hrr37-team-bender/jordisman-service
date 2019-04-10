import React from 'react';
import axios from 'axios';
import moment from 'moment';
import StarRating from './StarRating.jsx';
import styles from './style.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      showReviews: 3
    }
    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.handleBackBtn = this.handleBackBtn.bind(this);
  }

  componentDidMount() {
    // console.log('.href:', window.location.href);
    let urlArr = window.location.href.split('/');
    let id = urlArr[urlArr.length - 2]; //get the id from url bar

    axios.get(`http://localhost:3003/api/reviews/${id}`)
      .then(res => {
        this.setState(
          { reviews: res.data });
      })
      .catch(err => {
        console.log('failed to get data', err);
      });
  }

  handleNextBtn() {
    this.setState({
      showReviews: this.state.showReviews + 3
    })
  }

  handleBackBtn() {
    this.setState({
      showReviews: this.state.showReviews - 3
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <p className="bold">Overall Customer Rating</p>
          <div className="starbreak">
            <StarRating rating={4} />
          </div>
            <span className="space"> 3.9 ({this.state.reviews.length})</span>
            <span className="redText hov">Write a Review</span>

          <p className="bold">Reviews</p>

          <div className="box">
            <p>1-{this.state.reviews.slice(0, this.state.showReviews).length} of {this.state.reviews.length} Reviews</p>
            <p>Sort by:
            <select className="selectCss">
              <option>Most Relevant</option>
              <option>Most Recent</option>
              <option>Most Helpful</option>
              <option>Highest to Lowest Rating</option>
              <option>Lowest to Highest Rating</option>
            </select></p>
          </div>
        </div>
        <div>
          {this.state.reviews.slice(0, this.state.showReviews).map(item =>
            <div key={item.id}>
              <div className="starbreak"><StarRating rating={item.rating} />
              </div>
              <span className="user">{item.username}</span>
                <span>{moment(item.created_at).fromNow()}</span>
              <p>{item.review}</p>
            </div>
          )}
      </div>
        <button className="button buttonHover" onClick={this.handleBackBtn}>
          &#9664;
        </button>
        <button className="button buttonHover" onClick={this.handleNextBtn}>
          &#9654;
        </button>
      </div>
    )
  }
}

export default Reviews;


