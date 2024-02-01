import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { useProduct } from '../context/ProductConetxt';

const Inputbar = () => {

  const {searchTerm,updateSearchTerm }=useProduct();

  const handleInputChange=(event)=>{
    updateSearchTerm(event.target.value);
  }

  return (
    <>
      <nav className='d-flex border-bottom p-3 align-items-center justify-content-around'>
          <input
          onChange={handleInputChange}
          value={searchTerm}
          className='border-1 rounded p-2 w-50 mx-auto'
          type='text' 
          placeholder='Enter item to Search' />
        <div className='d-flex gap-2'>
          <a href='#'>
            <CiShoppingCart style={{ width: '1.5rem', height: '1.5rem' }}/>
          </a>
          <a href='#'>
            <FcLikePlaceholder style={{ width: '1.5rem', height: '1.5rem' }} />
          </a>
          <a href='#'>
            <MdOutlineAccountCircle style={{ width: '1.5rem', height: '1.5rem' }}/>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Inputbar;
