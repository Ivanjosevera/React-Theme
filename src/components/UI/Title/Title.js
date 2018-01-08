import React from 'react';

const title = props => (
  <h1 style={{
    'margin': '0 0 20px 0',
    'fontSize': '30px',
    'textAlign': 'center'
  }}>
    {props.text}
  </h1>
)

export default title;