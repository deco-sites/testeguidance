import { signal } from "@preact/signals";

const showHeader = signal(true);
const lastScrollY = signal(0);
const isMobileMenuOpen = signal(false);
const isCartOpen = signal(false);
const selectedSKU = signal("");

const state = {
  showHeader,
  lastScrollY,
  isMobileMenuOpen,
  isCartOpen,
  selectedSKU,
};

export const useUI = () => state;
