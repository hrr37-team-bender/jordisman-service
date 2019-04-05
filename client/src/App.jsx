import React from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import StarRating from './StarRating.jsx';

const Wrapper = styled.section`
  padding: 14em;
  font-family: Helvetica, Arial, sans-serif;
`;

const User = styled.span`
  font-weight: bold;
  margin-right: 15px;
`;


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      productId: 81420
    }
  }

  componentDidMount() {
    axios.get(`/api/reviews/${this.state.productId}`)
      .then(res => {
        this.setState({ reviews: res.data });
        console.log('get.data:', data);
      })
      .catch(err => {
        console.log('failed to get data', err);
      });
  }

  render() {
    return (
      <Wrapper>
        {this.state.reviews.map(item =>
          <div>
            <StarRating rating = {item.rating} />
            <div><User>{item.username}</User>
              <span>{moment(item.created_at).fromNow()}</span>
            </div>


            <p>{item.review}</p>
          </div>
        )}
      </Wrapper>
    )
  }
}

export default App;


