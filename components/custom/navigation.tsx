import Link from "next/link";
import React from "react";
import NavLinks from "./navLinks";
import { MobileMenu } from "./mobileMenu";

const Navigation = () => {
  return (
    <div>
      <div className="container flex flex-row justify-between items-center py-5">
        <h1 className="text-3xl font-bellota">Douglas Reddan</h1>
        <MobileMenu />

        <div className="hidden lg:block">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
