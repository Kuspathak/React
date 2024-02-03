import React from 'react';
import Catogery from './Catogery';
import Price from './Price';
import Colors from './Colors';

const Sidebar = () => {
  return (
    <div className='d-flex flex-column gap-4'>
        <Catogery/>
        <Price/>
        <Colors/>
    </div>
  )
}

export default Sidebar