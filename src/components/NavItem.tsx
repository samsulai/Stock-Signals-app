"use client"
import React from 'react'
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";
const NavItem = () => {
    const pathname = usePathname();
    const isActive = (href: string) => {
        return pathname === href;
    };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-8 font-medium">
        {
            NAV_ITEMS.map((item, index) => (
                <li key={index}  className="cursor-pointer hover:text-white transition">
                    <Link href={item.href} className={`hover:text-yellow-500 transition-colors ${isActive(item.href) ? 'text-gray-100' : ''}`}>
                        {item.label}
                    </Link>
                </li>
            ))


        }
    </ul>
  )
}

export default NavItem
