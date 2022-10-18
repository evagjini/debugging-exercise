import { displayError } from "../../utils/displayError";
import { getAll } from "../../utils/API";
import React, { useState } from "react";
import { Product } from "../../utils/types";

/*
Business logic for the main app component
*/
const useApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const init = React.useCallback(() => {
    setIsLoading(true);
    getAll((products: Product[]) => {
      setProducts(products);
      setIsLoading(false);
    }).catch((err) => {
      displayError(err);
      setIsLoading(false);
    });
  }, [setIsLoading, isLoading]);

  React.useEffect(() => {
    init();
    return () => console.log("Thank you fo using our products");
  }, []);

  return {
    products,
    isLoading,
  };
};

export default useApp;
