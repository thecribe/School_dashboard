import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex gap-2 justify-center lg:justify-start items-center p-2 font-extrabold"
          >
            <Image src="/logo.png" alt="logo" width={48} height={48} />
            <span className=" hidden lg:block text-xl tracking-wider ">
              TheCribe
            </span>
          </Link>
          <Menu />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col ">
        <NavBar />

        {children}
      </div>
    </section>
  );
}
