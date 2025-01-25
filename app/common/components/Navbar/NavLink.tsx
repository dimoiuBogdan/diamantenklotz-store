"use client";

import { cn } from "@/app/lib/utils/utils";
import { Link } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavigationItem } from "./navbar.types";

interface NavLinkProps {
  item: NavigationItem;
}

export const NavLink = ({ item }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          className={cn(
            "text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1",
            isHovered && "text-gray-900"
          )}
        >
          {item.name}
          {"sublinks" in item ? (
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isHovered && "transform rotate-180"
              )}
            />
          ) : null}
        </Link>
      </div>

      {/* Dropdown Menu */}
      {"sublinks" in item ? (
        <div
          className={cn(
            "absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out transform origin-top-left",
            isHovered
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          )}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {item.sublinks?.map((sublink) => (
              <Link
                key={sublink.name}
                href={sublink.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                role="menuitem"
              >
                {sublink.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
