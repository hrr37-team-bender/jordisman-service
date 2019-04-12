import React from 'react';
import Reviews from './Reviews.jsx';
import styles from './style.css';
import Modal from 'react-modal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openReviews: false
    }
    this.toggleReviews = this.toggleReviews.bind(this);
  }
  toggleReviews() {
    this.setState({
      openReviews: !this.state.openReviews
    })
  }

  renderReviews() {
    if (this.state.openReviews === false) {
      return (
        <div className="appWrapper"
          onClick={this.toggleReviews}>
          Ratings and Reviews
          <span className="floatRight">&#9662;</span>
        </div>
      )
    } else {
      return (
        <div>
          <div className="appWrapper"
            onClick={this.toggleReviews}>
            Ratings and Reviews
            <span className="floatRight">&#9662;</span>
          </div>
          <Reviews />
        </div>
      )
    }
  }

  render() {
    return (
      <div>{this.renderReviews()}</div>
    )
  }
}

export default App;


