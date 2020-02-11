import React from 'react';
import logo from './logo.png';
import './App.css';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';

function App() {
  return (
    <div>
    <Header logo={logo}
    title="Delicious"
    motto="The best food blog on the web." />
    <Body title="Chocolate Pizza"
    details="Posted on 15 Dec 2013 / Desserts"
     />
    <Footer copyright="Delicious &copy; 2013 All Rights Reserved."
    license="Proudly published with Ghost." />
    </div>
  );
}

export default App;
