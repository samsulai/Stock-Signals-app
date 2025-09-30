import React from "react";

import Header from "@/components/Header";
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen flex-col text-gray-400">
            <Header />
          <div className="container py-10">
              {children}
          </div>
        </main>


    );
}
