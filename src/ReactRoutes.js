import React from 'react';
import { Routes, Route } from 'react-router-dom';
 
//importing components
import HomePage from './screens/HomePage/HomePage';
import Login from './screens/Login/Login';
import Jobs from './screens/Jobs/Jobs';

const ReactRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
        </Routes>
    )
}

export default ReactRoutes;