"use client";
import React, { useState } from "react";
import { handleAnchorScroll } from "@/lib/functions";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ScrollTop = () => {
  const [displayScrollButton, setDisplayScrollButton] = useState("block");

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setDisplayScrollButton(
        window.scrollY > 500 ? "block opacity-100" : "opacity-0 hidden"
      );
    });
  }

  // bottom-3 right-3 z-10 pt-1 fixed rounded-t-full bg-testYellow transition-opacity text-slate-900 border-slate-900 border-2

  return (
    <Link
      className={cn(
        "bottom-5 right-5 z-10 fixed text-testRed opacity-0 transition-opacity",
        displayScrollButton
      )}
      onClick={() => handleAnchorScroll("#top")}
      href="#top"
    >
      <svg
        className="text-testRed transform-180"
        width="30"
        viewBox="0 0 123 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2.5L61.5 61L120 2.5"
          stroke="currentColor"
          strokeWidth="8"
        />
        <path
          d="M3 119L61.5 177.5L120 119"
          stroke="currentColor"
          strokeWidth="8"
        />
        <path
          d="M3 61L61.5 119.5L120 61"
          stroke="currentColor"
          strokeWidth="8"
        />
      </svg>
    </Link>
  );
};

export default ScrollTop;
