import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row align-baseline flex-grow justify-end">
      <Link href="#work" className="ml-8">
        Work
      </Link>
      <Link href="#bio" className="ml-8">
        Bio
      </Link>
      <Link href="#press" className="ml-8">
        Press
      </Link>
      <Link href="#contact" className="ml-8">
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
