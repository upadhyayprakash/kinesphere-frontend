"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { headerContent } from "@/lib/content";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Set initial value
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900 border-b border-zinc-800">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">
            {headerContent.companyName}
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex">
            <div className="hidden md:flex md:flex-1">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                {headerContent.navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <Link className="ml-6" href="./#book-appointment">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                {headerContent.buttonText}
              </Button>
            </Link>
          </div>
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden border-zinc-700 text-white"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-zinc-900 text-white border-zinc-800"
              >
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  {headerContent.navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-zinc-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white">
                      {headerContent.buttonText}
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
