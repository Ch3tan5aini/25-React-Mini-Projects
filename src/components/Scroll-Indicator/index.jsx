import React, { useEffect } from "react";
import { useState } from "react";

export default function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchProducts(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const responseData = await response.json();

      responseData && responseData.products.length ? (
        setProductsData(responseData.products)
      ) : (
        <h2>No Data Found!</h2>
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      <h2>Error Occured!</h2>;
    }
  }

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / scrollHeight) * 100);
  }

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
  }, []);

  if (loading) {
    <h2>Loading Please Wait</h2>;
  }
  console.log(scrollPercentage);

  return (
    <div>
      <div className="fixed w-full">
        <div className="topContainer h-16 w-full flex justify-center items-center bg-green-600">
          <h1 className="text-2xl text-white">Scroll Indicator</h1>
        </div>
        <div className="scroll-indicator-progress-bar w-full h-2 bg-lime-950">
          <div
            className="scrool-indicator-current-progress z-10 w-0 h-2 bg-yellow-400"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {productsData && productsData.length ? (
          productsData.map((dataItem, index) => (
            <p key={index}>{dataItem.title}</p>
          ))
        ) : (
          <h2>NO Data</h2>
        )}
      </div>
    </div>
  );
}
