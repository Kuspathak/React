import React from 'react';
import Input from '../component/Input';

function Category() {
  return (
    <div className='border p-2 shadow'>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input
          value=""
          title="All"
          name="test"
          color="#000" // Add your desired color
        />
        <Input
          value="sneakers"
          title="Sneakers"
          name="test"
          color="#FF5733" // Add your desired color
        />
        <Input
          value="flats"
          title="Flats"
          name="test"
          color="#8B4513" // Add your desired color
        />
        <Input
          
          value="sandals"
          title="Sandals"
          name="test"
          color="#808080" // Add your desired color
        />
        <Input
         
          value="heels"
          title="Heels"
          name="test"
          color="#FF1493" // Add your desired color
        />
      </div>
    </div>
  );
}

export default Category;