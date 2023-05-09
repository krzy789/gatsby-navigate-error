import React from 'react';
import { navigate } from 'gatsby';

const Button = (props) => (
  <div onClick={() => navigate(-1)}>Button</div>
);

export default Button;
