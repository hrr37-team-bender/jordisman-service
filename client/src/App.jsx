import React from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx';


const Wrapper = styled.div`
  padding: 20px 10px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 30px;
  border: 1px solid #DDDDDD;
  border-radius: 3px;
  cursor: pointer;
  background-color: #F2F2F2;
  box-shadow: 2px 3px #999;
  :hover {background-color: white};
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'title'
    }
    this.handleShowReviews = this.handleShowReviews.bind(this);
  }

  handleShowReviews() {
    this.setState({
      view: 'Reviews'
    });
  }

  renderReviews() {
    const {view} = this.state;
    if (view === 'title') {
      return <Wrapper onClick={this.handleShowReviews}>Reviews and Ratings &#9662;</Wrapper>
    } else {
      return <Reviews />
    }
  }

  render() {
    return (
      <div>{this.renderReviews()}</div>
    )
  }
}

export default App;


