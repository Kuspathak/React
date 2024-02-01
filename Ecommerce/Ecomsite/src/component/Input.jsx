import 'bootstrap/dist/css/bootstrap.css';
import { useProduct } from '../context/ProductConetxt';
import { useState } from 'react';

const Input = ({value,title}) => {

const [isChecked, setIsChecked] = useState(false);
const {updateSelectedCategory}=useProduct();
  const handleSelectChange =(event)=>{
updateSelectedCategory(event.target.value)
setIsChecked(!isChecked);

  }


    return (
    <>
    <div className=''>
   <label className=''>
    <input 
    checked={isChecked}
    onChange={handleSelectChange}
    type='checkbox' 
    value={value}/>
    {title}
   </label>
   </div>
    </>
  )
}

export default Input