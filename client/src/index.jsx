import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';
// import StarRatings from './react-star-ratings';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

componentDidMount() {
  axios.get(`/api/reviews/81420`)
  .then(res => {
    this.setState({reviews: res.data});
    console.log('get.data:', data);
  })
  .catch(err => {
    console.log('failed to get data', err);
  });
}

  render() {
    return (
      <div>

        {this.state.reviews.map(item =>
            <div>

              <span>{moment(item.created_at).fromNow()}</span>
              <p>{item.review}</p>
            </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
