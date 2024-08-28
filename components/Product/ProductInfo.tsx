import {
  ProductAddToCartButton,
  ProductSKUSelector,
} from "site/islands/ProductIslands.tsx";
import ShareButton from "site/components/Product/ShareButton.tsx";
import { useUI } from "site/islands/useUI.ts";

const ProductInfo = () => {
  const { selectedSKU } = useUI();

  const images = [
    "https://acerstore.vtexassets.com/arquivos/ids/163373-800-auto?v=638513176412600000&width=800&height=auto&aspect=true",
    "https://www.saldaodainformatica.com.br/themes/classic/assets/img/categorias/notebooki5.webp",
    "https://imgs.casasbahia.com.br/55061758/1g.jpg",
  ];

  const productName = "Nome do Produto";
  const productPrice = "R$ 199,99";
  const productDescription = "Descrição detalhada do produto.";

  return (
    <div className="mb-4">
      <div className="mb-4">
        <div className="w-full h-64 bg-gray-200 mb-2">
          <img
            src={images[0]}
            alt="Product"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex space-x-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              className="w-20 h-20 object-cover cursor-pointer hover:opacity-75"
            />
          ))}
        </div>

        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{productName}</h1>
          <p className="text-xl text-gray-600 mt-2">{productPrice}</p>
          <p className="text-gray-700 mt-4">{productDescription}</p>

          <ProductSKUSelector selectedSKU={selectedSKU} />
          <div className="flex items-center space-x-4 mt-4">
            <ProductAddToCartButton selectedSKU={selectedSKU} />
            <ShareButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
