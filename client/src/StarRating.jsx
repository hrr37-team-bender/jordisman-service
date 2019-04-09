import React from 'react';
import styled from 'styled-components'

const Stars = styled.span`
  font-size: 1.1em;
`;

const RedStar = styled.span`
  letter-spacing: 1px;
  color: red;
`;

const GreyStar = styled.span`
  color: grey;
`;


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
        <Stars>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
        </Stars>
      )
    } else if (this.state.rating === 4) {
      return (
        <Stars>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <GreyStar>&#9733;</GreyStar>
        </Stars>
      )
    } else if (this.state.rating === 3) {
      return (
        <Stars>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
        </Stars>
      )
    } else if (this.state.rating === 2) {
      return (
        <Stars>
          <RedStar>&#9733;</RedStar>
          <RedStar>&#9733;</RedStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
        </Stars>
      )
    } else if (this.state.rating === 1) {
      return (
        <Stars>
          <RedStar>&#9733;</RedStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
        </Stars>
      )
    } else {
      return (
        <Stars>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
          <GreyStar>&#9733;</GreyStar>
        </Stars>
      )
    }
  }
}

export default StarRating;
