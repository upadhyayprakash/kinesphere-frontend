import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { footerContent } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-900 text-white">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Company</h3>
            {footerContent.companyLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Services</h3>
            {footerContent.serviceLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Locations</h3>
            {footerContent.locationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Connect</h3>
            {footerContent.legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-zinc-400">
            {footerContent.copyright(new Date().getFullYear())}
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
