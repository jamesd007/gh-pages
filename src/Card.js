import React from 'react';
// import ShootingStar from './ShootingStar'
import SStar from './SStar'


const Card = ({ image, text, styleAll, stylePic, styleTitle }) => (
  <div
    style={{
      ...styleAll,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end'
    }}>
    <img style={{ ...stylePic }} src={image} alt="card" />
    <p style={{ ...styleTitle }}>{text}</p>
    <SStar />
  </div>
);

export default Card;
