import Gallery from "site/components/Product/Gallery.tsx";
import ProductInfo from "site/components/Product/ProductInfo.tsx";
import ShareButton from "site/components/Product/ShareButton.tsx";
import { useUI } from "site/islands/useUI.ts";
import {
  ProductAddToCartButton,
  ProductSKUSelector,
} from "site/islands/ProductIslands.tsx";

const Product = () => {
  const { selectedSKU } = useUI();

  return (
    <div className="flex max-w-6xl bg-zinc-300 justify-center items-cente p-4 rounded-lg">
      <ProductInfo /> 
    </div>
  );
};

export default Product;
