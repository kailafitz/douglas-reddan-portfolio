"use client";
import Link from "next/link";
import React from "react";

interface Props {
  handleClose?: () => void | undefined;
}

const NavLinks = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row align-baseline flex-grow justify-end pt-8 lg:pt-0">
      <Link
        href="#work"
        className="ml-8 mb-3 lg:mb-0 text-xl lg:text-lg btn-animation"
        onClick={props.handleClose ? props.handleClose : undefined}
      >
        Work
      </Link>
      <Link
        href="#bio"
        className="ml-8 mb-3 lg:mb-0 text-xl lg:text-lg btn-animation"
        onClick={props.handleClose ? props.handleClose : undefined}
      >
        Bio
      </Link>
      <Link
        href="#press"
        className="ml-8 mb-3 lg:mb-0 text-xl lg:text-lg btn-animation"
        onClick={props.handleClose ? props.handleClose : undefined}
      >
        Press
      </Link>
      <Link
        href="#contact"
        className="ml-8 mb-3 lg:mb-0 text-xl lg:text-lg btn-animation"
        onClick={props.handleClose ? props.handleClose : undefined}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
