'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/dashboard" },
    { name: "Invoices", href: "/dashboard/invoices" },
    { name: "Customers", href: "/dashboard/customers" },
  ];

  return (
    <nav className="flex flex-col">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`p-4 ${pathname === link.href ? "bg-gray-100 font-bold" : ""}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
