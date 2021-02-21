import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const styles = {
  footer: {
    marginTop: '20px',
    position: 'relative',
    height: '25%',
    backgroundImage: 'linear-gradient(#A8A8A8, 	#909090',
    borderTopLeftRadius: '50% 20%',
    borderTopRightRadius: '50% 20%',
    color: 'white'
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
}

function Footer() {
  return (
    <footer style={styles.footer}>
      developed by
      <a style={styles.a} href="https://github.com/genGrievouz" > @genGrievouz </a>
      <FontAwesomeIcon icon={faGithub} />
    </footer>
    )
}

export default Footer;