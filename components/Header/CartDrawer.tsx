interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  return (
    <div
      className={`fixed right-0 top-0 h-full z-50 w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button onClick={onClose} className="mb-4">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="space-y-4">
          <p className="text-gray-800">Produto 1 - Tamanho: M - Preço: R$100</p>
          <p className="text-gray-800">Produto 2 - Tamanho: G - Preço: R$150</p>
          <div className="border-t pt-4 mt-4 text-gray-800">
            <p>Total: R$250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
