import React from 'react';

// components
import Header from './components/Header'


//styles
import {GlobalStyle} from './GlobalStyles'
// const start = () => React.createElement('div', null, "This used React createelement")
function App() {
  return (
    <div className="App">
      
      <Header />
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;
