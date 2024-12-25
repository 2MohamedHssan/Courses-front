'use client';

import ProductApis from "@/app/utils/ProductApis";
import React, { useEffect, useState } from "react";

function ProductDetails({ params }) {
  const [productId, setProductId] = useState(null);

  // Resolve `params` and set productId
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params; // Unwrap the Promise
      setProductId(resolvedParams?.productId);
    };
    
    resolveParams();
  }, [params]);

  // Fetch product details when productId is available
  useEffect(() => {
    if (productId) {
      ProductApis.getProductById(productId).then((res) => {
        console.log("Product:", res.data.data);
      })
    }
  }, [productId]);

  return (
    <div>
      {productId ? (
        <h1>Product ID: {productId}</h1>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;
