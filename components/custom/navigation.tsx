import Link from "next/link";
import React from "react";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div>
      <div className="container flex flex-row justify-between py-5">
        <h1>Douglas Reddan</h1>
        <div className="flex flex-row align-baseline flex-grow justify-end">
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
      </div>
    </div>
  );
};

export default Navigation;
