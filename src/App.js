import React from 'react';
import Main from './components/main.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

var styles = {
  container: {
    backgroundColor: 'white',
    paddingLeft: '15%',
    paddingRight: '15%',
    textAlign: 'center'
  }
}

function App() {

  return (
    <div className="App" style={styles.container}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
