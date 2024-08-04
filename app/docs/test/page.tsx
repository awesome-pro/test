import { Link as NextLink } from "@nextui-org/link";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col gap-5">
      <Link href="/">Next Native Link for Home</Link>
      <br />
      <NextLink href="/">NextUI Link for Home</NextLink>
    </div>
  );
}

export default Page;
