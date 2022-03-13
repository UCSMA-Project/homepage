import React from 'react';

import { Navbar } from './components';
import { Features, Footer, Header, WhatsUCSMA } from './containers';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <WhatsUCSMA />
        <Features />
        <Footer />
    </div>
  );
};

export default App;
