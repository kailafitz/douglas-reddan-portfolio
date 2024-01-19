"use client";
import React, { useState } from "react";
import { handleAnchorScroll } from "@/lib/functions";
import { cn } from "@/lib/utils";
import RedArrows from "./redArrows";

const ScrollTop = () => {
  const [displayScrollButton, setDisplayScrollButton] = useState("block");

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setDisplayScrollButton(window.scrollY > 500 ? "opacity-100" : " ");
    });
  }

  // bottom-3 right-3 z-10 pt-1 fixed rounded-t-full bg-testYellow transition-opacity text-slate-900 border-slate-900 border-2

  return (
    <RedArrows
      className={cn(
        "bottom-5 right-5 z-10 fixed text-testRed opacity-0 transition-opacity transform-180",
        displayScrollButton
      )}
      width="30"
      height="60"
      anchor="#top"
      onClick={() => handleAnchorScroll("#top")}
    />
  );
};

export default ScrollTop;
