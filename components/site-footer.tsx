import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-900 text-white">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Company</h3>
            <Link href="/" className="text-sm text-zinc-400 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-sm text-zinc-400 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-sm text-zinc-400 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Services</h3>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Orthopedic Physiotherapy
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Sports Injury Management
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Post-Op Rehabilitation
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Locations</h3>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              JP Nagar
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Hennur
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Domlur
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Whitefield
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Connect</h3>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Peak Performance. All rights reserved.
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
  )
}

