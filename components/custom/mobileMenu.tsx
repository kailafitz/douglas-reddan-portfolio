"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "./navLinks";
import { useState } from "react";

export function MobileMenu() {
  const [openState, setOpenState] = useState(false);

  const handleClose = () => {
    setOpenState(false);
  };

  return (
    <Sheet open={openState} onOpenChange={setOpenState}>
      <SheetTrigger asChild>
        <Button className="flex flex-col justify-between h-9 w-7 lg:hidden">
          <span
            className="bg-black"
            style={{ width: "inherit", height: "2.5px" }}
          ></span>
          <span
            className="bg-black"
            style={{ width: "inherit", height: "2.5px" }}
          ></span>
          <span
            className="bg-black"
            style={{ width: "inherit", height: "2.5px" }}
          ></span>
        </Button>
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={(event) => event.preventDefault()}
        className="bg-gray-900 text-testYellow"
      >
        <NavLinks handleClose={handleClose} />
      </SheetContent>
    </Sheet>
  );
}
