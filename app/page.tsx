import { Link } from "@nextui-org/link";

import TabComponent from "@/components/TabComponent";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <TabComponent />
      <Link href="/about">Go to About</Link>
    </div>
  );
}
