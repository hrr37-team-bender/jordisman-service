import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Modal from 'react-modal';
import StarRating from './StarRating.jsx';
import styles from './style.css';
import NewReview from './NewReview.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      showReviews: 3,
      showPopup: false
    }
    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.handleBackBtn = this.handleBackBtn.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    console.log('.href:', window.location.href);
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

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleNextBtn() {
    this.setState({
      showReviews: this.state.showReviews + 3
    })
  }

  handleBackBtn() {
    if (this.state.showReviews > 3) {
      this.setState({
        showReviews: this.state.showReviews - 3
      });
    }
  }

  toggleModal() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render() {
    return (
      <div className="reviewLeftMargin">
          <p className="boldText">Overall Customer Rating</p>
          <div className="floatLeft"><StarRating rating={4} /></div>

        <div className="marginTop" onClick={this.toggleModal}>
                <span>3.9 ({this.state.reviews.length}) </span>
                <span className="redText space">Write a Review</span>
              </div>

          <Modal
            isOpen={this.state.showPopup}
            onRequestClose={this.toggleModal}
          >
          <button
            className="floatRight"
            onClick={this.toggleModal}>X</button><br />

            <NewReview/>

            </Modal>

          <p className="boldText">Reviews</p>

          <div>
            <p>1-{this.state.reviews.slice(0, this.state.showReviews).length} of {this.state.reviews.length} Reviews</p>

          <div>
            <span className="marginRight">Sort by: </span>
            <select className="selectC">
              <option>Most Relevant</option>
              <option>Most Recent</option>
              <option>Most Helpful</option>
              <option>Highest to Lowest Rating</option>
              <option>Lowest to Highest Rating</option>
            </select>
          </div><br />

          </div>



        <div>
          {this.state.reviews.slice(0, this.state.showReviews).map(item =>
            <div key={item.id}>
              <div>
                <StarRating rating={item.rating} />
              </div>
              <span className="user">{item.username}</span>
              <span>{moment(item.created_at).fromNow()}</span>
              <p className="reviewText">{item.review}</p>
            </div>
          )}
        </div>

        <button className="button" onClick={this.handleBackBtn}>
          &#9664;
        </button>
        <button className="button" onClick={this.handleNextBtn}>
          &#9654;
        </button>

      </div>
    )
  }
}

export default Reviews;


