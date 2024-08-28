import { useUI } from "site/islands/useUI.ts";
import { useState } from "preact/hooks";
import MobileDrawer from "site/components/Header/MobileDrawer.tsx";
import CartDrawer from "site/components/Header/CartDrawer.tsx";

export function HeaderLogo() {
  const { isMobileMenuOpen } = useUI();

  return (
    <>
      <MobileDrawer
        isOpen={isMobileMenuOpen.value}
        onClose={() => (isMobileMenuOpen.value = false)}
      />

      <div className="flex items-center">
        <button
          onClick={() => (isMobileMenuOpen.value = true)}
          className="md:hidden mr-4"
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <a href="/" className="text-2xl font-bold text-gray-800">
          Logo
        </a>
      </div>
    </>
  );
}
export function HeaderLoginAndCart() {
  const { isCartOpen } = useUI();

  return (
    <>
      <CartDrawer
        isOpen={isCartOpen.value}
        onClose={() => (isCartOpen.value = false)}
      />

      <div className="flex items-center">
        <button className="mr-4">
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
              d="M5.121 17.804A3 3 0 017 18h10a3 3 0 013-3V9a3 3 0 00-3-3H7a3 3 0 00-1.879.696"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 7a4 4 0 01-8 0"
            ></path>
          </svg>
        </button>

        <button
          onClick={() => {
            isCartOpen.value = true;
          }}
        >
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
              d="M3 3h2l.34 2M7 13h10l4-8H5.66M7 13l-1 5a1 1 0 001 1h12a1 1 0 001-1l-1-5M7 13l4-8m0 0H5.66m6.34 0l-1.34 4m0 4v6"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
