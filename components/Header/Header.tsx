import { useSignalEffect } from "@preact/signals";
import Navbar from "site/components/Header/Navbar.tsx";
import { HeaderLoginAndCart, HeaderLogo } from "site/islands/HeaderIsland.tsx";
import { useUI } from "site/islands/useUI.ts";

const Header = () => {
  const { lastScrollY, showHeader } = useUI();

  const controlHeader = () => {
    if (globalThis.scrollY > lastScrollY.value) {
      showHeader.value = false;
    } else {
      showHeader.value = true;
    }
    lastScrollY.value = globalThis.scrollY;
  };

  useSignalEffect(() => {
    const handleScroll = () => controlHeader();

    globalThis.addEventListener("scroll", handleScroll);
    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ease-in-out ${
          showHeader.value
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <HeaderLogo />

          <Navbar />

          <HeaderLoginAndCart />
        </div>
      </header>
    </>
  );
};

export default Header;
