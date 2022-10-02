
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import products from './products';
import {useState} from 'react'

function App() {

  let [count, setCount] = useState(0)

   
  const handleClick = () => {
      setCount(prevCount => prevCount + 1)
  }

  const productCard = products.map(item =>{
    return (
      <Products 
      key = {item.id}
      newPrice={item.newPrice}
      oldPrice = {item.oldPrice}
      img = {item.productImage}
      productName={item.productName}
      toggle={handleClick}
      />
    )
  }) 
  return (
    <div className="App">
     <Navbar number={count}/>
     <Main />
     <section className='product-title'>
     <h1 className='primary-heading '>Products</h1>
     </section>
     <section className='products-list'> 
    {productCard}
     </section>
     <Footer />
    </div>
  );
}

export default App;
