import React, { FC, ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex gap-8">
      <div className="bg-blue-300 h-screen p-16 flex flex-col gap-8 justify-center items-center ">
        <Link href="/" className="hover:underline">Dashboard</Link> {/*Serve per i collegamenti dentro l'app, per i collegamenti esterni si usa a href */}
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
      
      {children}
    </div>
  );
};

export default Layout;
