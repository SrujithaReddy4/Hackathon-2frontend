import { useEffect , useState} from "react";
export function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch]  = useState([])
    console.log(products);
  
    useEffect(() => {
      fetch("http://localhost:4000/products")
        .then((data) => data.json())
        .then((productData) => setProducts(productData));
  
    }, []);
    return (
      <div className="brands">
        {products.map(product => (
          <>
            <img src={product.avatar} alt="pic" height="400" />
            <h2>Name:{product.name}</h2>
            <h2>Brand:{product.Brand}</h2>
            <h2>Price:{product.price}</h2>
            <h2>Time:{product.time}</h2>
          </>))}
      </div>
    );
  }