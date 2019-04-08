import React from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import StarRating from './StarRating.jsx';

const Wrapper = styled.section`
  padding: 20px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
`;
const User = styled.span`
  font-weight: bold;
  margin-right: 15px;
`;
const Space = styled.span`
  margin: 0px 15px;
`;
const RedText = styled.span`
  color: red;
  :hover {color: black};
  cursor: pointer;
`;
const Starbreak = styled.div`
  margin-bottom: 7px;
`;
const Bold = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
const Button = styled.button`
  background-color: #EEEEEE;
  box-shadow: 2px 2px #999;
  :hover {background-color: white};
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 14px;
  margin: 14px 2px;
  cursor: pointer;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      productId: 81420
    }
    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.handleBackBtn = this.handleBackBtn.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/reviews/${this.state.productId}`)
      .then(res => {
        this.setState({ reviews: res.data.slice(0, 4) });
        console.log('get.data:', data);
      })
      .catch(err => {
        console.log('failed to get data', err);
      });
  }

  handleNextBtn() {
    axios.get(`/api/reviews/${this.state.productId}`)
      .then(res => {
        this.setState({ reviews: res.data });
      });
  }

  handleBackBtn() {
    axios.get(`/api/reviews/${this.state.productId}`)
      .then(res => {
        this.setState({ reviews: res.data.slice(0, 4) });
      });
  }

  render() {
    return (
      <Wrapper>
        <div>
          <Bold>Overall Customer Rating</Bold>
          <Starbreak>
            <StarRating rating={4} />
            <Space> 3.9 (97)</Space>
            <RedText>Write a Review</RedText>
          </Starbreak>
          <Bold>Reviews</Bold>
        </div>

        <div>
          {this.state.reviews.map(item =>
            <div>
              <Starbreak><StarRating rating={item.rating} /></Starbreak>
              <User>{item.username}</User>
                <span>{moment(item.created_at).fromNow()}</span>
              <p>{item.review}</p>
            </div>
          )}
        </div>
        <Button onClick={this.handleBackBtn}>&#9664;</Button>
        <Button onClick={this.handleNextBtn}>&#9654;</Button>
      </Wrapper>
    )
  }
}

export default App;


