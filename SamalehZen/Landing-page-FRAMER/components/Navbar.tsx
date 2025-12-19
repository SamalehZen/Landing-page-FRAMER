import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/" className="text-2xl font-bold tracking-tight text-black">Hanzo</Link>
      </div>
      <button className="pointer-events-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer">
        <Menu className="w-6 h-6 text-black" strokeWidth={1.5} />
      </button>
    </nav>
  );
}