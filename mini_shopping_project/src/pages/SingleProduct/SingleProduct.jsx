import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./singleProduct.css";

function SingleProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [loader, setLoader] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  async function fetchSingleProductData() {
    try {
      setLoader(true);
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await res.json();
      setProductData(result);
      setImageUrl(result.thumbnail);
    } catch (error) {
      setProductData(error);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    fetchSingleProductData();
  }, []);

  console.log(productData);

  return (
    <div className="singleProduct">
      <div className="mainImage">
        <img src={imageUrl} alt="" />
      </div>
      <div className="smallImage">
        {productData.images?.map((image, i) => {
          return <img onClick={() => setImageUrl(image)} key={i} src={image} />;
        })}
      </div>
      <div className="content">
        <h2> Title :- {productData.title}</h2>
        <p>Price :- ${productData.price}</p>
        <p>Stock :- {productData.stoce}</p>
        <p>Rating :- {productData.rating}</p>
        <p className="desc">{productData.description}</p>
        <button className="addToCart">Add To Cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
