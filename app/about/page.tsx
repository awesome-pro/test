"use client";

import TabComponent from "@/components/TabComponent";
import { Link as NextLink } from "@nextui-org/link";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname();

  return (
    <div>
        <TabComponent />
  </div>
  );
}
