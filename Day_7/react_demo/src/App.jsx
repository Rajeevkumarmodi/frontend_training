import React from "react";
import Test from "./Test";
import Card from "./Card";
function App() {
  return (
    <div>
      App
      <Test />
      <Card
        img="https://cdn.dummyjson.com/product-images/1/3.jpg"
        name="OPPOF19"
        des="goes beyond Galaxy to the Universe"
      />
      <Card
        img="https://cdn.dummyjson.com/product-images/2/2.jpg"
        name="Samsung Universe 9"
      />
      <Card
        img="https://cdn.dummyjson.com/product-images/2/2.jpg"
        name="Samsung Universe 9"
      />
      <Card
        img="https://cdn.dummyjson.com/product-images/2/2.jpg"
        name="Samsung Universe 9"
      />
    </div>
  );
}

export default App;
