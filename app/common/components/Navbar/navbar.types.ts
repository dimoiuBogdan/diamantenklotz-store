import { LucideIcon } from "lucide-react";

export interface SubLink {
  name: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  sublinks?: SubLink[];
}

export interface IconButton {
  icon: LucideIcon;
  label: string;
  action: () => void;
}
