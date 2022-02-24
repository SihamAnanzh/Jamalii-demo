import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { SingleProduct } from './SingleProduct/SingleProduct';

export const Products = ({ products,trendingData }) => {
  const { cart, setCart } = useContext(CartContext);


  const handleAddToCart = (id) => {
    const newProduct = products?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };
  return (
    <>
      {products.map((product) => (
        <SingleProduct   
          trendingData={trendingData}
          addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
          key={product.id}
          product={product}
          onAddToWish={(id) => console.log(id)}
          onAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
};
