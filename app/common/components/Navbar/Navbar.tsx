"use client";

import { cn } from "@/app/lib/utils/utils";
import { Link } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { NavLink } from "./NavLink";
import type { IconButton, NavigationItem } from "./navbar.types";

const Navbar = () => {
  const t = useTranslations("common.navigation");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const NAVIGATION_ITEMS: NavigationItem[] = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("products"),
      href: "/products",
      // sublinks: [
      //   { name: "Pure Diamonds", href: "/products/pure-diamonds" },
      //   { name: "Diamonds", href: "/products/diamonds" },
      //   { name: "Gemstones", href: "/products/gemstones" },
      //   { name: "Pearls", href: "/products/pearls" },
      //   { name: "Precious Metals", href: "/products/precious-metals" },
      //   { name: "Jewelry", href: "/products/jewelry" },
      // ],
    },
    {
      name: t("about"),
      href: "/about",
    },
    {
      name: t("contact"),
      href: "/contact",
    },
  ];

  const ICON_BUTTONS: IconButton[] = [
    // {
    //   icon: Search,
    //   label: "Search",
    //   action: () => console.log("Search clicked"),
    // },
    // {
    //   icon: ShoppingCart,
    //   label: "Cart",
    //   action: () => console.log("Cart clicked"),
    // },
    // {
    //   icon: User,
    //   label: "Profile",
    //   action: () => console.log("Profile clicked"),
    // },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-white shadow-md sticky top-0 w-full mx-auto px-4 lg:px-0 z-20"
    >
      <div className="mx-auto container">
        <div className="flex h-14 items-center">
          {/* Left Section - Logo */}
          <div className="hidden md:flex basis-[125px] items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              DiamantenKlotz
            </Link>
          </div>

          {/* Mobile Logo and Menu Button */}
          <div className="flex md:hidden justify-between w-full items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              DiamantenKlotz
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
          <div className="hidden md:flex basis-[100px] items-center justify-end space-x-4 mr-4">
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
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full left-0",
          isOpen ? "block" : "hidden"
        )}
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
