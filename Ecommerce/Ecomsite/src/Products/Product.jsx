import Inputbar from '../Navbar/Inputbar';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../component/Card';
import { useProduct } from '../context/ProductConetxt';
import { Link } from 'react-router-dom';

const Product = () => {

  const {products,searchTerm,selectedCategory}=useProduct();


  //---------------------------------------searching Input filter---------------------------------------------------------
  
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 &&
    (selectedCategory==='' || product.category===selectedCategory)
  );

// ---------------------------------------Selcted category filter-----------------------------------------------------
  
  return (
    <>
    <div className='row'> 
    <Inputbar/>
    </div>
    <div className='row'> 
    <div className='col-2'>
    <Sidebar/>
    </div>
    <div className='col-10 d-flex flex-wrap gap-4 items-center justify-content-center'>
        {filteredItems.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <Card key={product.id} product={product} />
          </Link>
        ))}
    </div>
    </div>
    
    </>
  )
}

export default Product