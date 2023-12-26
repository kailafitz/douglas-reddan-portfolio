"use client";
import React from "react";
import { handleAnchorScroll } from "@/lib/functions";
import Link from "next/link";

const links = [
  {
    label: "Work",
    anchor: "#work",
  },
  {
    label: "Bio",
    anchor: "#bio",
  },
  {
    label: "Press",
    anchor: "#press",
  },
  {
    label: "Contact",
    anchor: "#contact",
  },
];

interface Props {
  handleClose?: () => void | undefined;
}

const NavLinks = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row align-baseline flex-grow justify-end pt-8 lg:pt-0">
      {links.map((link, i) => {
        return (
          <Link
            key={i}
            href={link.anchor}
            className="ml-8 mb-3 lg:mb-0 text-xl lg:text-lg btn-animation"
            onClick={() => {
              handleAnchorScroll(link.anchor);
              props.handleClose ? props.handleClose() : undefined;
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
