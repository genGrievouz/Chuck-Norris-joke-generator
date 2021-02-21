import React from 'react';
import chucks_head from './img/chuck.png';
import { ShakeHard } from 'reshake';

var styles = {
  header: {
    position: 'relative',
    height: '25%',
    backgroundImage: 'linear-gradient(#ff9d2f, #ff6126',
    borderBottomLeftRadius: '50% 20%',
    borderBottomRightRadius: '50% 20%',
  },
  h1: {
    font: 'calibri',
    fontFamily: 'Open Sans',
    fontSize: '25px',
    padding: '40px'
  },
  img: {
    Animation: 'jiggle 0.2s infinite',
  }
}

function Header() {
  return (
    <div style={styles.header}>
        <h1 style={styles.h1}> Chuck Norris joke generator 2.0</h1>
        <ShakeHard>
          <div>
            <img src={chucks_head} alt="Chuck's head" />
          </div>
        </ShakeHard>
    </div>
  )
}

export default Header;