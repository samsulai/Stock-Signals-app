import React from "react";

import Image from 'next/image'
import Link from "next/link";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const session  = await auth.api.getSession({ headers: await headers() });
    if (session?.user) {
        return redirect('/');
    }
    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
<Link href="/" className="auth-logo">
<Image src="/assets/icons/logo.svg" alt="logo" height={30} width={130}/>
</Link>

                {children}
            </section>
            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-4 lg:mb-16">
<blockquote>
    <p className="auth-blockquote">Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more confident making moves in the market</p>
</blockquote>
<div className="flex justify-between items-center mt-6">
<div className="">
<cite className="auth-testimonial-author">
    — Ethan R.
</cite>
<p className="text-gray-500">Retail Investor</p>
</div>

    <div className="flex items-center gap-0.5">
        {
            [1,2,3,4,5].map((star: number) => (
               <Image src="/assets/icons/star.svg" height={20} alt="star" key={star} width={20} />
            ))
        }
    </div>


                    </div>
                </div>
                <div className="flex-1 relative">
<Image className="auth-dashboard-preview absolute top-0" src="/assets/images/dashboard.png" alt="dashboard" width={1024} height={682}/>
                </div>
            </section>

        </main>


    );
}
