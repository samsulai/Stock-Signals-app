import React from "react";

import Header from "@/components/Header";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth.api.getSession({ headers: await headers() });

    if(!session?.user) redirect('/sign-in');

    const user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
    }

    return (
        <main className="flex min-h-screen flex-col text-gray-400">
            <Header user={user}/>
          <div className="container py-10">
              {children}
          </div>
        </main>


    );
}
