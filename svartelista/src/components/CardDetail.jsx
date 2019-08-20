import React, { Fragment } from 'react';

const CardDetail = (name, title, value) => (
  <Fragment>
    <p className={name}>
      <b>{title}</b>
      <br />
      {value}
    </p>
  </Fragment>
);

export default CardDetail;
