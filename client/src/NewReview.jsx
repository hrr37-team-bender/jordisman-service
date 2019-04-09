import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating.jsx';

const NewReview = (props) => (
  <div>
    <StarRating rating={0} />
    <form>
    <label>Review Title: </label>
    <input type="text" placeholder="Example: I bought this a month ago..."/>
    <label>Review: </label>
    <input type="text" placeholder="Example: I bought this a month ago..."/>

    </form>
  </div>
)


export default NewReview;