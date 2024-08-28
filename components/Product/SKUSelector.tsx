import { useSignal } from "@preact/signals";

interface SKUSelectorProps {
  selectedSKU: any;
}

const SKUSelector = ({ selectedSKU }: SKUSelectorProps) => {
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
};

export default SKUSelector;
