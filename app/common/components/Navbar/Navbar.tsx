"use client";

import { cn } from "@/app/lib/utils";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "./NavLink";
import type { IconButton, NavigationItem } from "./navbar.types";

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
    sublinks: [
      { name: "Pure Diamonds", href: "/products/pure-diamonds" },
      { name: "Diamonds", href: "/products/diamonds" },
      { name: "Gemstones", href: "/products/gemstones" },
      { name: "Pearls", href: "/products/pearls" },
      { name: "Precious Metals", href: "/products/precious-metals" },
      { name: "Jewelry", href: "/products/jewelry" },
    ],
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const ICON_BUTTONS: IconButton[] = [
  {
    icon: Search,
    label: "Search",
    action: () => console.log("Search clicked"),
  },
  {
    icon: ShoppingCart,
    label: "Cart",
    action: () => console.log("Cart clicked"),
  },
  {
    icon: User,
    label: "Profile",
    action: () => console.log("Profile clicked"),
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      ref={navRef}
      className="bg-white shadow-md sticky top-0 w-full  mx-auto z-20"
    >
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center">
          {/* Left Section - Logo */}
          <div className="hidden md:flex basis-[200px] items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          {/* Mobile Logo and Menu Button */}
          <div className="flex md:hidden justify-between w-full items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Middle Section - Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Right Section - Icons */}
          <div className="hidden md:flex basis-[200px] items-center justify-end space-x-4">
            {ICON_BUTTONS.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={item.label}
              >
                <item.icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn("md:hidden absolute w-full", isOpen ? "block" : "hidden")}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {NAVIGATION_ITEMS.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => ("sublinks" in item ? null : setIsOpen(false))}
              >
                {item.name}
              </Link>
              {"sublinks" in item ? (
                <div className="pl-4 space-y-1">
                  {item.sublinks?.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-sm transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="border-t border-gray-200 pt-4 flex justify-around">
            {ICON_BUTTONS.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={item.label}
              >
                <item.icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
