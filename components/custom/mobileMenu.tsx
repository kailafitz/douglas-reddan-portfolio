import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "./navLinks";

export function MobileMenu() {
  return (
    <Sheet>
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
      <SheetContent className="bg-slate-900 text-testYellow">
        <NavLinks />
      </SheetContent>
    </Sheet>
  );
}
