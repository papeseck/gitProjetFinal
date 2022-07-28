import React from 'react';
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import Panier from './Panier';

const Page = () => {
  return (

    <Routes>
        <Route path='/Panier' exact element={<Panier/>}/>

    </Routes>
  )
}

export default Page