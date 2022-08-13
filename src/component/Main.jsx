import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../scss/Main.scss' 
import Information from './Information';
import Availability from './Availability';
import Performance from './Performance';
import Quality from './Quality';
import Produced from './Produced';
import {data} from '../helpers/data'


const Main = () => {
  const {name, status} =data[0];
      return (
    <> 
     <div className='main'>
     <Information name={name} status={status}/> 
     <Availability/>
      <Performance/>
     <Quality/>
     <Produced/>

   </div>
   
    </>
  )
}

export default Main