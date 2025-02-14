import { LucideIcon } from "lucide-react";

export interface SubLink {
  name: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  sublinks?: SubLink[];
  download?: boolean;
  target?: string;
  rel?: string;
}

export interface IconButton {
  icon: LucideIcon;
  label: string;
  action: () => void;
}
