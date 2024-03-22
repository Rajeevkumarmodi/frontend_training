import React, { Fragment, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./home.css";
function Home() {
  const [allProduct, setAllProduct] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      setAllProduct(result.products);
      console.log(result);
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homePage">
      <div className="allProduct">
        {allProduct.map((product) => {
          return (
            <Fragment key={product.id}>
              <Card
                thumbnail={product.thumbnail}
                price={product.price}
                title={product.title}
                rating={product.rating}
                productId={product.id}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
