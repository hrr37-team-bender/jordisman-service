import React from 'react';
import styles from './style.css';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating
    };
  }
  render() {
    if (this.state.rating === 5) {
      return (
        <div className="stars">
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
        </div>
      )
    } else if (this.state.rating === 4) {
      return (
        <div className="stars">
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
        </div>
      )
    } else if (this.state.rating === 3) {
      return (
        <div className="stars">
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
        </div>
      )
    } else if (this.state.rating === 2) {
      return (
        <div className="stars">
          <span className="redStar">&#9733;</span>
          <span className="redStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
        </div>
      )
    } else if (this.state.rating === 1) {
      return (
        <div className="stars">
          <span className="redStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
        </div>
      )
    } else {
      return (
        <div className="stars">
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
          <span className="greyStar">&#9733;</span>
        </div>
      )
    }
  }
}

export default StarRating;
