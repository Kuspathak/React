import React from 'react';
import Input from '../component/Input';

function Colors({ handleChange }) {
  return (
    <div className='border p-2'>
      <h2 className="sidebar-title">Colors</h2>
      <div>
      <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
      </div>
    </div>
  );
}

export default Colors;