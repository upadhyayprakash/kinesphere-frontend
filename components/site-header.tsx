import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

export function SiteHeader() {
  // const isMobile = useMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900 border-b border-zinc-800">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-white">KINESPHERE</span>
        </Link>
        <div className="hidden md:flex md:flex-1">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="text-zinc-300 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-zinc-300 transition-colors hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-zinc-300 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex">
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Book an appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
