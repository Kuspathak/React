import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ product }) => {
  const [showLoveButton, setShowLoveButton] = useState(false);

  return (
    <div className=''>
      <div
        className='card mt-3 p-3 ms-5 product-card'
        style={{ width: '20rem', height: '20rem' }}
        onMouseEnter={() => setShowLoveButton(true)}
        onMouseLeave={() => setShowLoveButton(false)}
      >
        <img
          style={{ width:'200px', height: '150px', marginBottom: '1rem' }}
          src={product.img}
          className='card-img-top'
          alt={product.title}
        />
        <div className='card-body'>
        <div style={{ height: '20rem', overflow: 'hidden' }}>
            <h5 className='card-title'>{product.title}</h5>
            <p>Price: ${product.newPrice}</p>
            <p>Brand : {product.company}</p>
          </div>
          {showLoveButton && <FcLikePlaceholder />}
        </div>
      </div>
    </div>
  );
};

export default Card;
