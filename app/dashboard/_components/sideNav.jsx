"use client";

import { LayoutGrid, PiggyBank, Receipt, Shield, Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function sideNav() {
  const path = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutGrid,
    },
    {
      name: "Budget",
      href: "/dashboard/budget",
      icon: PiggyBank,
    },
    {
      name: "Expenses",
      href: "/dashboard/expenses",
      icon: Receipt,
    },
    {
      name: "Upgrade",
      href: "/dashboard/categories",
      icon: Shield,
    },
    // {
    //     name: 'Reports',
    //     href: '/dashboard/reports',
    //     icon: 'reports'
    // }
  ];

  return (
    <div className="h-screen border shadow-sm ">
      <div className="mb-5 p-5 border-b-4 border-[#1ec67821]">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={160} height={100} />
        </Link>
      </div>

      {links.map((link, index) => (
        <Link href={link.href} key={index}>
          <h2
            className={`flex gap-2 text-gray-600 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-[#1ec67821] hover:font-semibold ${
              path === link.href ? "text-primary bg-[#1ec67821]" : ""
            }`}
          >
            <link.icon />
            {link.name}
          </h2>
        </Link>
      ))}
    </div>
  );
}

export default sideNav;
