import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect(`/${routing.defaultLocale}/404`);
}
