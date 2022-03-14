import React from 'react';

import { Navbar } from './components';
import { Features, Footer, Header, WhatsUCSMA } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
            <WhatsUCSMA />
        </div>
        <Features />
        <Footer />
    </div>
  );
};

export default App;
