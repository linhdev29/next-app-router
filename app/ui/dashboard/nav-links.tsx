"use client"

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import { usePathname } from "next/navigation"
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname()
  
  
  // If the current path is not in the list of links, don't render anything.
  if (!links.find((link) => link.href === pathname)) {
    return null;
  }
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium transition-colors duration-200 ease-in-out md:flex-none md:justify-start md:p-2 md:px-3",
              pathname === link.href
                ? "bg-sky-100 text-blue-600"
                : "bg-gray-50 hover:bg-sky-100 hover:text-blue-600"
            )}
          >
            <LinkIcon className="w-6 transition-transform duration-200 group-hover:scale-110" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
