interface AddToCartButtonProps {
  selectedSKU: any;
}

const AddToCartButton = ({ selectedSKU }: AddToCartButtonProps) => {
  const handleAddToCart = () => {
    if (selectedSKU.value) {
      // Lógica para adicionar ao carrinho
      console.log(`Adicionando ao carrinho: SKU ${selectedSKU.value}`);
    } else {
      alert('Por favor, selecione um tamanho.');
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
};

export default AddToCartButton;
