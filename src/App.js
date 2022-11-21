import './App.css';
import { useEffect, useState } from 'react';
import Header from "./components/Header"
import Products from './products.json'
import Product from './components/Product'




function App() {

  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])

  useEffect(() => {
    console.log(basket)

  }, [basket])
  return (
    <>
      <Header money={money}></Header>
      {Products.map((product) => {
        return <Product basket={basket} setBasket={setBasket} key={product.id} product={product}></Product>
      })}
    </>
  );
}

export default App;
