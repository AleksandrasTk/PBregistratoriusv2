import React from 'react';

const footer = {
  height: '40px',
  width: '100%',
  background: 'black',
  color: 'white',
  display: 'grid',
  placeItems: 'center',
  fontSize: '0.8rem',
};

const Footer = () => {
  return (
    <div style={footer}>
      <p>
        &copy; Squad - <i>Build your squad here!!</i>{' '}
      </p>
    </div>
  );
};

export default Footer;
