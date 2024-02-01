import React from 'react'
import {useParams} from 'react-router';
import data from '../data/data';
const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((x) => x.id == id);

  
  return (
    <div>
    <div className="container my-5 py-3">
            <div className="row">
              <h1 className='text-center'>Product Details</h1><hr/>
                <div className="col-md-6 my-5 d-flex justify-content-center mx-auto">
                    <img src={product.img} alt={product.title} style={{ width:"500px" ,height:"300px"}}   />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 text-center fw-bold">{product.title}</h1>   <hr/>
                 
                    <h5 className="my-4">Price: ${product.newPrice}</h5>
                    <h5 className="lead">Category: {product.category}</h5>
                    <p>{product.reviews}</p> <p>Color: {product.color}</p>
                    <p>Brand: {product.company}</p>
                <div><button type="button" className="btn btn-dark">Add to Cart</button></div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails