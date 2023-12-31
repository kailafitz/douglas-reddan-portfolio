import Link from "next/link";
import React from "react";
import NavLinks from "./navLinks";
import { MobileMenu } from "./mobileMenu";

const NavigationBar = () => {
  return (
    <nav id="#top" className="flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full">
        <div className="container flex flex-row justify-between items-center py-5">
          <Link href="/draft">
            <h1 className="text-3xl font-bellota">Douglas Reddan</h1>
          </Link>
          <MobileMenu />

          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
