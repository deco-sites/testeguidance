import { useUI } from "site/islands/useUI.ts";

export function ProductSKUSelector({ selectedSKU }: any) {
  //   const { selectedSKU } = useUI();

  const sizes = ["P", "M", "G", "GG"];

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-800">
        Selecione o Tamanho:
      </h2>
      <div className="flex space-x-2 mt-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => (selectedSKU.value = size)}
            className={`px-4 py-2 border ${
              selectedSKU.value === size ? "border-black" : "border-gray-300"
            } rounded-lg text-gray-800 hover:bg-gray-200`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
export function ProductAddToCartButton({ selectedSKU }: any) {
  //   const { selectedSKU } = useUI();

  const handleAddToCart = () => {
    if (selectedSKU.value) {
      // Lógica para adicionar ao carrinho
      console.log(`Adicionando ao carrinho: SKU ${selectedSKU.value}`);
    } else {
      alert("Por favor, selecione um tamanho.");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Adicionar ao Carrinho
    </button>
  );
}
