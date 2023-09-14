import React, { useContext, useEffect } from "react";
import { ConnectButton } from "../components";
import { logo } from "../assets";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="w-full h-15 text-black flex py-2 px-4 lg:px-10 justify-between items-center border-b-[1px] border-white-400">
      <a href="/">
        <Image src={logo} alt="Wallet icon" className="w-40 hover:opacity-80" />
      </a>
      <ConnectButton />
    </nav>
  );
};

export default Header;
