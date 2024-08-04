"use client";

import { Link } from "@nextui-org/link";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname } from "next/navigation";
import React from "react";

function TabComponent() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-xl text-primary-600">
      <p>Current pathname: {pathname}</p>
      <br />
      <Tabs aria-label="Tabs example" selectedKey={pathname || "/"}>
        <Tab key="/" href="/" title="Home">
          <div className="flex flex-col items-center gap-2">
            <Link href="/about">Go to About</Link>
            <Link href="/docs">Go to Docs</Link>
            <Link href="/blog">Go to Blog</Link>
            <Link href="/pricing">Go to Pricing</Link>
          </div>
        </Tab>
        <Tab key="/about" href="/about" title="About">
          <div className="flex flex-col items-center gap-2">
            <Link href="/about">Go to About</Link>
            <Link href="/docs">Go to Docs</Link>
            <Link href="/blog">Go to Blog</Link>
            <Link href="/pricing">Go to Pricing</Link>
          </div>
        </Tab>
        <Tab key="/docs" href="/docs" title="Docs">
          <div className="flex flex-col items-center gap-2">
            <Link href="/about">Go to About</Link>
            <Link href="/docs">Go to Docs</Link>
            <Link href="/blog">Go to Blog</Link>
            <Link href="/pricing">Go to Pricing</Link>
          </div>
        </Tab>
        <Tab key="/blog" href="/blog" title="Blog">
          <div className="flex flex-col items-center gap-2">
            <Link href="/about">Go to About</Link>
            <Link href="/docs">Go to Docs</Link>
            <Link href="/blog">Go to Blog</Link>
            <Link href="/pricing">Go to Pricing</Link>
          </div>
        </Tab>
        <Tab key="/pricing" href="/pricing" title="Pricing">
          <div className="flex flex-col items-center gap-2">
            <Link href="/about">Go to About</Link>
            <Link href="/docs">Go to Docs</Link>
            <Link href="/blog">Go to Blog</Link>
            <Link href="/pricing">Go to Pricing</Link>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabComponent;
