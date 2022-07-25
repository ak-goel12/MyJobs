import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';

//import components
import ReactRoutes from './ReactRoutes';
import Header from './screens/components/Header/Header';

const App = () => {
  
  return( 
        <HashRouter>
        <div className='app'>
            <ReactRoutes/>
        </div>
    </HashRouter>
  )
}

export default App;